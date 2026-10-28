<?php

namespace App\Entidades;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Embeddable]
final class Endereco
{

    #[ORM\Column(name: "cep", length: 8)]
    private string $cep;

    #[ORM\Column(name: "logradouro", length: 150)]
    private string $logradouro;

    #[ORM\Column(name: "numero", length: 10)]
    private string $numero;

    #[ORM\Column(name: "complemento", length: 150)]
    private string $complemento;

    #[ORM\Column(name: "ponto_referencia", length: 150, nullable: true)]
    private ?string $pontoReferencia;

    #[ORM\Column(name: "bairro", length: 100)]
    private string $bairro;

    #[ORM\Column(name: "cidade", length: 150)]
    private string $cidade;

    #[ORM\Column(name: "uf", length: 2)]
    private string $uf;

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

    public function getCep(): ?string
    {
        return $this->cep;
    }

    public function setCep(string $cep): static
    {
        $this->cep = $cep;

        return $this;
    }

    public function getLogradouro(): ?string
    {
        return $this->logradouro;
    }

    public function setLogradouro(string $logradouro): static
    {
        $this->logradouro = $logradouro;

        return $this;
    }

    public function getNumero(): ?string
    {
        return $this->numero;
    }

    public function setNumero(string $numero): static
    {
        $this->numero = $numero;

        return $this;
    }

    public function getComplemento(): ?string
    {
        return $this->complemento;
    }

    public function setComplemento(string $complemento): static
    {
        $this->complemento = $complemento;

        return $this;
    }

    public function getPontoReferencia(): ?string
    {
        return $this->pontoReferencia;
    }

    public function setPontoReferencia(string $pontoReferencia): static
    {
        $this->pontoReferencia = $pontoReferencia;

        return $this;
    }

    public function getBairro(): ?string
    {
        return $this->bairro;
    }

    public function setBairro(string $bairro): static
    {
        $this->bairro = $bairro;

        return $this;
    }

    public function getCidade(): ?string
    {
        return $this->cidade;
    }

    public function setCidade(string $cidade): static
    {
        $this->cidade = $cidade;

        return $this;
    }

    public function getUf(): ?string
    {
        return $this->uf;
    }

    public function setUf(string $uf): static
    {
        $this->uf = $uf;

        return $this;
    }
}
