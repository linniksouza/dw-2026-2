<?php

namespace App\CasosDeUso;

use App\Dto\RedefinirSenhaDto;
use App\Excecoes\ClienteNaoEncontradoException;
use App\Repositorios\ClientesRepository;

final class RedefinirSenhaCliente
{

    private readonly ClientesRepository $repository;

    public function __construct(ClientesRepository $repository)
    {
        $this->repository = $repository;
    }

    public function executar(RedefinirSenhaDto $dto): void
    {
        $cliente = $this->repository->buscarCliente($dto->email);
        if($cliente === null)
            throw new ClienteNaoEncontradoException("Não foi encontrado um cliente com o endereço de e-mail '$dto->email'.");

        $cliente->setSenha($dto->novaSenha);
        $this->repository->salvarCliente($cliente);
    }
}
