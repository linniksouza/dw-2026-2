<?php

namespace App\Entidades;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

use DateTime;

#[ORM\Entity]
#[ORM\Table(name: "clientes")]
final class Cliente
{

    #[ORM\Id]
    #[ORM\Column(name: "cpf", length: 11)]
    private string $cpf;

    #[ORM\Column(name: "nome", length: 200)]
    private string $nome;

    #[ORM\Column(name: "data_nascimento", type: Types::DATE_MUTABLE)]
    private DateTime $dataNascimento;

    #[ORM\Column(name: "email", length: 200, unique: true)]
    private string $email;

    #[ORM\Column(name: "telefone", length: 13, nullable: true)]
    private ?string $telefone;

    #[ORM\Column(name: "senha", type: Types::TEXT)]
    private string $senha;

    #[ORM\Embedded(class: Endereco::class, columnPrefix: false)]
    private Endereco $endereco;

    public function __construct(
        string $cpf,
        string $nome,
        DateTime $dataNascimento,
        string $email,
        string $senha,
        Endereco $endereco,
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

    public function getCpf(): ?string
    {
        return $this->cpf;
    }

    public function getNome(): ?string
    {
        return $this->nome;
    }

    public function setNome(string $nome): static
    {
        $this->nome = $nome;

        return $this;
    }

    public function getDataNascimento(): ?\DateTime
    {
        return $this->dataNascimento;
    }

    public function setDataNascimento(\DateTime $dataNascimento): static
    {
        $this->dataNascimento = $dataNascimento;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getTelefone(): ?string
    {
        return $this->telefone;
    }

    public function setTelefone(?string $telefone): static
    {
        $this->telefone = $telefone;

        return $this;
    }

    public function getEndereco(): Endereco
    {
        return $this->endereco;
    }

    public function getSenha(): ?string
    {
        return $this->senha;
    }

    public function setSenha(string $senha): static
    {
        $this->senha = $senha;

        return $this;
    }
}
