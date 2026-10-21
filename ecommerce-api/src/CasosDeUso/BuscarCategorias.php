<?php

namespace App\CasosDeUso;

use App\Dto\CategoriaProdutoDto;
use App\Repositorios\CategoriasRepository;

final class BuscarCategorias
{

    private readonly CategoriasRepository $repository;

    public function __construct(CategoriasRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * 
     * Método que executa o cenário de caso
     * de uso de buscar dados de categorias
     * de produtos.
     * 
     * @return CategoriaProdutoDto[] Array de categorias de produtos.
     */
    public function executar(): array
    {
        $entities = $this->repository->buscarCategorias();
        $categorias = [];

        foreach($entities as $entity){
            $categoria = new CategoriaProdutoDto(
                id: $entity->getId(),
                nome: $entity->getNome(),
                descricao: $entity->getDescricao()
            );
            array_push($categorias, $categoria);
        }

        return $categorias;
    }
}
