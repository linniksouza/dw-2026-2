<?php

namespace App\Dto;

use Symfony\Component\Serializer\Attribute\SerializedName;

final class ProdutoDto
{

    #[SerializedName(serializedName: "id")]
    public readonly string $id;
    #[SerializedName(serializedName: "ean")]
    public readonly string $ean;
    #[SerializedName(serializedName: "nome")]
    public readonly string $nome;
    #[SerializedName(serializedName: "descricao")]
    public readonly string $descricao;
    #[SerializedName(serializedName: "url_imagem")]
    public readonly string $urlImagem;
    #[SerializedName(serializedName: "especificacoes")]
    public readonly array $especificacoes;
    #[SerializedName(serializedName: "estoque")]
    public readonly int $estoque;
    #[SerializedName(serializedName: "preco")]
    public readonly float $preco;
    #[SerializedName(serializedName: "avaliacao")]
    public readonly AvaliacaoProdutoDto $avaliacao;
    #[SerializedName(serializedName: "categoria")]
    public readonly CategoriaProdutoDto $categoria;

    public function __construct(
        string $id,
        string $ean,
        string $nome,
        string $descricao,
        string $urlImagem,
        array $especificacoes,
        int $estoque,
        float $preco,
        AvaliacaoProdutoDto $avaliacao,
        CategoriaProdutoDto $categoria
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
}
