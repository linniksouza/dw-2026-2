<?php

namespace App\Dto;

use Symfony\Component\Serializer\Attribute\SerializedName;
use Symfony\Component\Validator\Constraints as Assert;

final class NovoEnderecoDto
{

    #[Assert\NotBlank(message: "O CEP não pode ficar em branco")]
    #[Assert\Length(exactly: 8, exactMessage: "O CEP deve ter exatamente 8 dígitos")]
    #[Assert\Regex(pattern: "/\d/", message: "O CEP deve ter somente números")]
    #[SerializedName(serializedName: "cep")]
    public readonly string $cep;

    #[Assert\NotBlank(message: "O nome do logradouro não pode ficar em branco")]
    #[SerializedName(serializedName: "logradouro")]
    public readonly string $logradouro;

    #[Assert\NotBlank(message: "O número não pode ficar em branco")]
    #[SerializedName(serializedName: "numero")]
    public readonly string $numero;

    #[SerializedName(serializedName: "complemento")]
    public readonly string $complemento;

    #[SerializedName(serializedName: "ponto_referencia")]
    public readonly ?string $pontoReferencia;

    #[Assert\NotBlank(message: "O bairro não pode ficar em branco")]
    #[SerializedName(serializedName: "bairro")]
    public readonly string $bairro;

    #[Assert\NotBlank(message: "A cidade não pode ficar em branco")]
    #[SerializedName(serializedName: "cidade")]
    public readonly string $cidade;

    #[Assert\NotBlank(message: "A UF não pode ficar em branco")]
    #[Assert\Length(exactly: 2, exactMessage: "A sigla da UF deve ter exatamente 2 dígitos")]
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

    #[Assert\NotBlank(message: "O CPF do cliente não pode ficar em branco")]
    #[Assert\Length(exactly: 11, exactMessage: "O CPF do cliente deve ter exatamente 11 dígitos")]
    #[Assert\Regex(pattern: "/\d/", message: "O CPF do cliente deve ter somente números")]
    #[SerializedName(serializedName: "cpf")]
    public readonly string $cpf;

    #[Assert\NotBlank(message: "O nome do cliente não pode ficar em branco")]
    #[SerializedName(serializedName: "nome")]
    public readonly string $nome;

    #[Assert\NotBlank(message: "A data de nascimento do cliente não pode ficar em branco")]
    #[Assert\Regex(
        pattern: "/((19|20)\d\d)-(0?[1-9]|1[012])-(0?[1-9]|[12]\d|3[01])/",
        message: "A data de nascimento do cliente está no formato inválido"
    )]
    #[SerializedName(serializedName: "data_nascimento")]
    public readonly string $dataNascimento;

    #[Assert\NotBlank(message: "O e-mail do cliente não pode ficar em branco")]
    #[Assert\Email(message: "O e-mail do cliente está no formato inválido")]
    #[SerializedName(serializedName: "email")]
    public readonly string $email;

    #[Assert\NotBlank(message: "O telefone do cliente não pode ficar em branco")]
    #[Assert\Length(
        min: 12,
        max: 13,
        minMessage: "O telefone do cliente deve ter pelo menos 12 caracteres (fixo)",
        maxMessage: "O telefone do clientedeve ter no máximo 13 caracteres (celular)"
    )]
    #[SerializedName(serializedName: "telefone")]
    public readonly ?string $telefone;

    #[Assert\NotBlank(message: "A senha de acesso do cliente não pode ficar em branco")]
    #[Assert\Length(min: 5, minMessage: "A senha de acesso do cliente deve ter pelo menos 5 caracteres")]
    #[SerializedName(serializedName: "senha")]
    public readonly string $senha;

    #[Assert\NotNull(message: "O endereço do cliente não pode ficar em branco")]
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
