<?php

namespace App\Dto;

use Symfony\Component\Serializer\Attribute\SerializedName;

final class NovoEnderecoDto
{

    #[SerializedName(serializedName: "cep")]
    public readonly string $cep;
    #[SerializedName(serializedName: "logradouro")]
    public readonly string $logradouro;
    #[SerializedName(serializedName: "numero")]
    public readonly string $numero;
    #[SerializedName(serializedName: "complemento")]
    public readonly string $complemento;
    #[SerializedName(serializedName: "ponto_referencia")]
    public readonly ?string $pontoReferencia;
    #[SerializedName(serializedName: "bairro")]
    public readonly string $bairro;
    #[SerializedName(serializedName: "cidade")]
    public readonly string $cidade;
    #[SerializedName(serializedName: "uf")]
    public readonly string $uf;

    public function __construct(
        string $cep,
        string $logradouro,
        string $numero,
        string $complemento,
        ?string $pontoReferencia,
        string $bairro,
        string $cidade,
        string $uf
    ) {
        $this->cep = $cep;
        $this->logradouro = $logradouro;
        $this->numero = $numero;
        $this->complemento = $complemento;
        $this->pontoReferencia = $pontoReferencia;
        $this->bairro = $bairro;
        $this->cidade = $cidade;
        $this->uf = $uf;
    }
}

final class NovoClienteDto
{

    #[SerializedName(serializedName: "cpf")]
    public readonly string $cpf;
    #[SerializedName(serializedName: "nome")]
    public readonly string $nome;
    #[SerializedName(serializedName: "data_nascimento")]
    public readonly string $dataNascimento;
    #[SerializedName(serializedName: "email")]
    public readonly string $email;
    #[SerializedName(serializedName: "telefone")]
    public readonly ?string $telefone;
    #[SerializedName(serializedName: "senha")]
    public readonly string $senha;
    #[SerializedName(serializedName: "endereco")]
    public readonly NovoEnderecoDto $endereco;

    public function __construct(
        string $cpf,
        string $nome,
        string $dataNascimento,
        string $email,
        string $senha,
        NovoEnderecoDto $endereco,
        ?string $telefone
    ) {
        $this->cpf = $cpf;
        $this->nome = $nome;
        $this->dataNascimento = $dataNascimento;
        $this->email = $email;
        $this->senha = $senha;
        $this->endereco = $endereco;
        $this->telefone = $telefone;
    }
}
