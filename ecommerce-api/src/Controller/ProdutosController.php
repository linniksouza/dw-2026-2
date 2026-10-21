<?php

namespace App\Controller;

use App\CasosDeUso\BuscarProdutos;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

#[Route("/produtos", name: "resource_produtos")]
final class ProdutosController extends AbstractController
{

    private readonly BuscarProdutos $buscarProdutosCase;

    public function __construct(BuscarProdutos $buscarProdutosCase)
    {
        $this->buscarProdutosCase = $buscarProdutosCase;
    }

    #[Route("", name: "buscar_produtos")]
    public function buscarProdutos(): JsonResponse
    {
        $produtos = $this->buscarProdutosCase->executar();

        return $this->json($produtos);
    }

    #[Route("/{idProduto}", name: "buscar_produto_por_id")]
    public function buscarProduto(string $idProduto): JsonResponse
    {
        return $this->json([]);
    }
}
