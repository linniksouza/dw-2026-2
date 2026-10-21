<?php

namespace App\Repositorios;

use App\Entidades\Produto;

interface ProdutosRepository
{

    /**
     * 
     * Método que busca os dados de todos os
     * produtos.
     * 
     * @return Produto[] Array de produtos.
     */
    public function buscarProdutos(): array;

    /**
     * 
     * Método que busca os dados de um produto
     * específico a partir do identificador.
     * 
     * @param $id Identificador do produto.
     * @return Produto|null Dados do produto, se encontrado.
     */
    public function buscarProduto(string $id): ?Produto;

}
