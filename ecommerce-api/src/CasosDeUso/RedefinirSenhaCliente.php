<?php

namespace App\CasosDeUso;

use App\Dto\RedefinirSenhaDto;
use App\Excecoes\ClienteNaoEncontradoException;
use App\Repositorios\ClientesRepository;

use Symfony\Component\PasswordHasher\PasswordHasherInterface;

final class RedefinirSenhaCliente
{

    private readonly ClientesRepository $repository;

    private readonly PasswordHasherInterface $hasher;

    public function __construct(
        ClientesRepository $repository,
        PasswordHasherInterface $hasher
    ) {
        $this->repository = $repository;
        $this->hasher = $hasher;
    }

    public function executar(RedefinirSenhaDto $dto): void
    {
        $cliente = $this->repository->buscarCliente($dto->email);
        if($cliente === null)
            throw new ClienteNaoEncontradoException("Não foi encontrado um cliente com o endereço de e-mail '$dto->email'.");

        $novaSenha = $this->hasher->hash($dto->novaSenha);
        $cliente->setSenha($novaSenha);
        $this->repository->salvarCliente($cliente);
    }
}
