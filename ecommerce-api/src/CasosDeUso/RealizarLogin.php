<?php

namespace App\CasosDeUso;

use App\Dto\LoginClienteDto;
use App\Dto\TokenDto;
use App\Excecoes\ClienteNaoEncontradoException;
use App\Excecoes\SenhaIncorretaException;
use App\Providers\TokenProvider;
use App\Repositorios\ClientesRepository;

use Symfony\Component\PasswordHasher\PasswordHasherInterface;

final class RealizarLogin
{

    private readonly ClientesRepository $repository;

    private readonly PasswordHasherInterface $hasher;

    private readonly TokenProvider $token;

    public function __construct(
        ClientesRepository $repository,
        PasswordHasherInterface $hasher,
        TokenProvider $token
    ) {
        $this->repository = $repository;
        $this->hasher = $hasher;
        $this->token = $token;
    }

    public function executar(LoginClienteDto $dto): TokenDto
    {
        $cliente = $this->repository->buscarCliente($dto->email);
        if($cliente === null)
            throw new ClienteNaoEncontradoException("Não foi encontrado um cliente com o endereço de e-mail '$dto->email'.");

        $senhaCorreta = $this->hasher->verify($cliente->getSenha(), $dto->senha);
        if(!$senhaCorreta)
            throw new SenhaIncorretaException("A senha de acesso do cliente está incorreta.");

        return $this->token->gerarToken([
            "cpf" => $cliente->getCpf(),
            "nome" => $cliente->getNome(),
            "email" => $cliente->getEmail(),
            "telefone" => $cliente->getTelefone()
        ]);
    }
}
