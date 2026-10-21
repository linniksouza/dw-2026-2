<?php

namespace App\CasosDeUso;

use App\Dto\AvaliacaoProdutoDto;
use App\Dto\CategoriaProdutoDto;
use App\Dto\ProdutoDto;
use App\Repositorios\ProdutosRepository;

final class BuscarProdutos
{

    private readonly ProdutosRepository $repository;

    public function __construct(ProdutosRepository $repository)
    {
        $this->repository = $repository;
    }

    public function executar(): array
    {
        $entities = $this->repository->buscarProdutos();
        $produtos = [];

        foreach($entities as $entity){
            $produto = new ProdutoDto(
                id: $entity->getId(),
                ean: $entity->getEan(),
                nome: $entity->getNome(),
                descricao: $entity->getDescricao(),
                urlImagem: $entity->getUrlImagem(),
                especificacoes: $entity->getEspecificacoes(),
                estoque: $entity->getEstoque(),
                preco: $entity->getPreco(),
                avaliacao: new AvaliacaoProdutoDto(
                    quantidade: $entity->getAvaliacao()->getQuantidade(),
                    media: $entity->getAvaliacao()->getMedia()
                ),
                categoria: new CategoriaProdutoDto(
                    id: $entity->getCategoria()->getId(),
                    nome: $entity->getCategoria()->getNome(),
                    descricao: $entity->getCategoria()->getDescricao()
                )
            );
            array_push($produtos, $produto);
        }

        return $produtos;
    }
}
