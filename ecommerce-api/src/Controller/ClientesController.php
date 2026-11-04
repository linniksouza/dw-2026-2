<?php

namespace App\Controller;

use App\CasosDeUso\CadastrarNovoCliente;
use App\CasosDeUso\RealizarLogin;
use App\CasosDeUso\RedefinirSenhaCliente;
use App\Dto\LoginClienteDto;
use App\Dto\NovoClienteDto;
use App\Dto\RedefinirSenhaDto;
use App\Excecoes\ClienteNaoEncontradoException;
use App\Excecoes\SenhaIncorretaException;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/clientes', name: 'resource_clientes')]
final class ClientesController extends AbstractController
{

    private readonly SerializerInterface $jsonMapper;

    private readonly ValidatorInterface $validator;

    private readonly CadastrarNovoCliente $cadastrarClienteCase;

    private readonly RedefinirSenhaCliente $redefinirSenhaCase;

    private readonly RealizarLogin $realizarLoginCase;

    public function __construct(
        SerializerInterface $jsonMapper,
        ValidatorInterface $validator,
        CadastrarNovoCliente $cadastrarClienteCase,
        RedefinirSenhaCliente $redefinirSenhaCase,
        RealizarLogin $realizarLoginCase
    ) {
        $this->jsonMapper = $jsonMapper;
        $this->validator = $validator;
        $this->cadastrarClienteCase = $cadastrarClienteCase;
        $this->redefinirSenhaCase = $redefinirSenhaCase;
        $this->realizarLoginCase = $realizarLoginCase;
    }

    #[Route('', name: 'cadastrar_cliente', methods: ["POST"])]
    public function cadastrarCliente(Request $request): JsonResponse
    {
        $dtoRequest = $this->jsonMapper->deserialize(
            $request->getContent(),
            NovoClienteDto::class,
            "json"
        );

        $erros = $this->validarRequisicao($dtoRequest);
        if(count($erros) > 0){
            return $this->json(
                ["erros" => $erros],
                JsonResponse::HTTP_BAD_REQUEST
            );
        }

        $dtoResponse = $this->cadastrarClienteCase->executar($dtoRequest);

        return $this->json($dtoResponse, JsonResponse::HTTP_CREATED);
    }

    #[Route('/redefinir-senha', name: 'redefinir_senha_cliente', methods: ["POST"])]
    public function redefinirSenhaCliente(Request $request): JsonResponse
    {
        try{
            $dtoRequest = $this->jsonMapper->deserialize(
                $request->getContent(),
                RedefinirSenhaDto::class,
                "json"
            );

            $erros = $this->validarRequisicao($dtoRequest);
            if(count($erros) > 0){
                return $this->json(
                    ["erros" => $erros],
                    JsonResponse::HTTP_BAD_REQUEST
                );
            }

            $this->redefinirSenhaCase->executar($dtoRequest);

            return $this->json(
                ["mensagem" => "Senha alterada com sucesso"],
                JsonResponse::HTTP_ACCEPTED
            );
        }catch(ClienteNaoEncontradoException $e){
            return $this->json(
                ["mensagem" => $e->getMessage()],
                JsonResponse::HTTP_NOT_FOUND
            );
        }
    }

    #[Route('/login', name: 'realizar_login_cliente', methods: ["POST"])]
    public function realizarLogin(Request $request): JsonResponse
    {
        try{
            $dtoRequest = $this->jsonMapper->deserialize(
                $request->getContent(),
                LoginClienteDto::class,
                "json"
            );
    
            $erros = $this->validarRequisicao($dtoRequest);
            if(count($erros) > 0){
                return $this->json(
                    ["erros" => $erros],
                    JsonResponse::HTTP_BAD_REQUEST
                );
            }
    
            $dtoResponse = $this->realizarLoginCase->executar($dtoRequest);
    
            return $this->json($dtoResponse);
        }catch(ClienteNaoEncontradoException | SenhaIncorretaException $e){
            return $this->json(
                ["mensagem" => $e->getMessage()],
                JsonResponse::HTTP_UNAUTHORIZED
            );
        }catch(Exception $e){
            return $this->json(
                ["mensagem" => "Não foi possível realizar o login do cliente. Tente novamente mais tarde."],
                JsonResponse::HTTP_INTERNAL_SERVER_ERROR
            );
        }
    }

    private function validarRequisicao(mixed $dtoRequest): array
    {
        $mensagens = [];

        $erros = $this->validator->validate($dtoRequest);
        if(count($erros) > 0){
            foreach($erros as $erro){
                $mensagens[] = [
                    "campo" => $erro->getPropertyPath(),
                    "mensagem" => $erro->getMessage()
                ];
            }
        }

        return $mensagens;
    } 
}
