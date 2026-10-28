<?php

namespace App\CasosDeUso;

use App\Dto\ClienteDto;
use App\Dto\EnderecoDto;
use App\Dto\NovoClienteDto;
use App\Entidades\Cliente;
use App\Entidades\Endereco;
use App\Repositorios\ClientesRepository;

use DateTime;

final class CadastrarNovoCliente
{

    private readonly ClientesRepository $repository;

    public function __construct(ClientesRepository $repository)
    {
        $this->repository = $repository;
    }

    public function executar(NovoClienteDto $dto): ClienteDto
    {
        $entity = new Cliente(
            cpf: $dto->cpf,
            nome: $dto->nome,
            dataNascimento: DateTime::createFromFormat("Y-m-d", $dto->dataNascimento),
            email: $dto->email,
            senha: $dto->senha,
            endereco: new Endereco(
                cep: $dto->endereco->cep,
                logradouro: $dto->endereco->logradouro,
                numero: $dto->endereco->numero,
                complemento: $dto->endereco->complemento,
                pontoReferencia: $dto->endereco->pontoReferencia,
                bairro: $dto->endereco->bairro,
                cidade: $dto->endereco->cidade,
                uf: $dto->endereco->uf,
            ),
            telefone: $dto->telefone
        );
        $this->repository->salvarCliente($entity);

        return new ClienteDto(
            cpf: $entity->getCpf(),
            nome: $entity->getNome(),
            dataNascimento: $entity->getDataNascimento()->format("Y-m-d"),
            email: $entity->getEmail(),
            endereco: new EnderecoDto(
                cep: $entity->getEndereco()->getCep(),
                logradouro: $entity->getEndereco()->getLogradouro(),
                numero: $entity->getEndereco()->getNumero(),
                complemento: $entity->getEndereco()->getComplemento(),
                pontoReferencia: $entity->getEndereco()->getPontoReferencia(),
                bairro: $entity->getEndereco()->getBairro(),
                cidade: $entity->getEndereco()->getCidade(),
                uf: $entity->getEndereco()->getUf(),
            ),
            telefone: $entity->getTelefone()
        );
    }
}
