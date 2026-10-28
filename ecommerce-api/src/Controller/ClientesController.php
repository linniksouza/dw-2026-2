<?php

namespace App\Controller;

use App\CasosDeUso\CadastrarNovoCliente;
use App\CasosDeUso\RedefinirSenhaCliente;
use App\Dto\NovoClienteDto;
use App\Dto\RedefinirSenhaDto;
use App\Excecoes\ClienteNaoEncontradoException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/clientes', name: 'resource_clientes')]
final class ClientesController extends AbstractController
{

    private readonly SerializerInterface $jsonMapper;

    private readonly CadastrarNovoCliente $cadastrarClienteCase;

    private readonly RedefinirSenhaCliente $redefinirSenhaCase;

    public function __construct(
        SerializerInterface $jsonMapper,
        CadastrarNovoCliente $cadastrarClienteCase,
        RedefinirSenhaCliente $redefinirSenhaCase
    ) {
        $this->jsonMapper = $jsonMapper;
        $this->cadastrarClienteCase = $cadastrarClienteCase;
        $this->redefinirSenhaCase = $redefinirSenhaCase;
    }

    #[Route('', name: 'cadastrar_cliente', methods: ["POST"])]
    public function cadastrarCliente(Request $request): JsonResponse
    {
        $dtoRequest = $this->jsonMapper->deserialize(
            $request->getContent(),
            NovoClienteDto::class,
            "json"
        );

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
}
