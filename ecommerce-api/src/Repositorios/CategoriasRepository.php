<?php

namespace App\Repositorios;

use App\Entidades\Categoria;

interface CategoriasRepository
{

    /**
     * 
     * Método que buscar todas as categorias de 
     * produtos.
     * 
     * @return Categoria[] Array de categorias de produtos.
     */
    public function buscarCategorias(): array;

}
