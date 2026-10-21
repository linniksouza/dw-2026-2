<?php

namespace App\Providers;

use App\Entidades\AvaliacaoProduto;
use App\Entidades\Categoria;
use App\Entidades\Produto;

class JsonFileProvider
{

    public function lerCategorias(): array
    {
        $strJson = file_get_contents("categorias.json");
        $jsonCategorias = json_decode($strJson, true);

        $categorias = [];
        foreach($jsonCategorias as $jsonCategoria){
            $categoria = $this->preencherCategoria($jsonCategoria);
            array_push($categorias, $categoria);
        }

        return $categorias;
    }

    public function lerProdutos(): array
    {
        $strJson = file_get_contents("./produtos.json");
        $jsonProdutos = json_decode($strJson, true);

        $produtos = [];
        foreach($jsonProdutos as $jsonProduto){
            $produto = $this->preencherProduto($jsonProduto);
            array_push($produtos, $produto);
        }

        return $produtos;
    }

    private function preencherCategoria(array $jsonCategoria): Categoria
    {
        return new Categoria(
            id: $jsonCategoria["id"],
            nome: $jsonCategoria["nome"],
            descricao: $jsonCategoria["descricao"]
        );
    }

    private function preencherAvaliacao(array $jsonAvaliacao): AvaliacaoProduto
    {
        return new AvaliacaoProduto(
            quantidade: $jsonAvaliacao["quantidade"],
            media: $jsonAvaliacao["media"]
        );
    }

    private function preencherProduto(array $jsonProduto): Produto
    {
        return new Produto(
            id: $jsonProduto["id"],
            ean: $jsonProduto["ean"],
            nome: $jsonProduto["nome"],
            descricao: $jsonProduto["descricao"],
            urlImagem: $jsonProduto["urlImagem"],
            especificacoes: $jsonProduto["especificacoes"],
            estoque: $jsonProduto["estoque"],
            preco: $jsonProduto["preco"],
            avaliacao: $this->preencherAvaliacao($jsonProduto["avaliacao"]),
            categoria: $this->preencherCategoria($jsonProduto["categoria"])
        );
    }
}
