<?php

namespace App\Entidades;

class Produto
{

    private string $id;
    private string $ean;
    private string $nome;
    private string $descricao;
    private string $urlImagem;
    private array $especificacoes;
    private int $estoque;
    private float $preco;
    private AvaliacaoProduto $avaliacao;
    private Categoria $categoria;

    public function __construct(
        string $id,
        string $ean,
        string $nome,
        string $descricao,
        string $urlImagem,
        array $especificacoes,
        int $estoque,
        float $preco,
        AvaliacaoProduto $avaliacao,
        Categoria $categoria
    ) {
        $this->id = $id;
        $this->ean = $ean;
        $this->nome = $nome;
        $this->descricao = $descricao;
        $this->urlImagem = $urlImagem;
        $this->especificacoes = $especificacoes;
        $this->estoque = $estoque;
        $this->preco = $preco;
        $this->avaliacao = $avaliacao;
        $this->categoria = $categoria;
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getEan(): string
    {
        return $this->ean;
    }

    public function getNome(): string
    {
        return $this->nome;
    }

    public function getDescricao(): string
    {
        return $this->descricao;
    }

    public function getUrlImagem(): string
    {
        return $this->urlImagem;
    }

    public function getEspecificacoes(): array
    {
        return $this->especificacoes;
    }

    public function getEstoque(): int
    {
        return $this->estoque;
    }

    public function getPreco(): float
    {
        return $this->preco;
    }

    public function getAvaliacao(): AvaliacaoProduto
    {
        return $this->avaliacao;
    }

    public function getCategoria(): Categoria
    {
        return $this->categoria;
    }
}
