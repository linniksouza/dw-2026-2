<?php

namespace App\Entidades;

class Categoria
{

    private string $id;
    private string $nome;
    private string $descricao;

    public function __construct(
        string $id,
        string $nome,
        string $descricao
    ) {
        $this->id = $id;
        $this->nome = $nome;
        $this->descricao = $descricao;
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getNome(): string
    {
        return $this->nome;
    }

    public function getDescricao(): string
    {
        return $this->descricao;
    }
}
