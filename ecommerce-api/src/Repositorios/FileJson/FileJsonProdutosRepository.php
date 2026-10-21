<?php

namespace App\Repositorios\FileJson;

use App\Entidades\Produto;
use App\Providers\JsonFileProvider;
use App\Repositorios\ProdutosRepository;

class FileJsonProdutosRepository implements ProdutosRepository
{

    private readonly JsonFileProvider $jsonProvider;

    public function __construct(JsonFileProvider $jsonProvider)
    {
        $this->jsonProvider = $jsonProvider;
    }

    public function buscarProdutos(): array
    {
        return $this->jsonProvider->lerProdutos();
    }

    public function buscarProduto(string $id): ?Produto
    {
        $produtos = $this->jsonProvider->lerProdutos();

        return array_find($produtos, fn(Produto $produto) => $produto->getId() === $id);
    }
}
