<?php

namespace App\Controller;

use App\CasosDeUso\BuscarCategorias;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

#[Route("/categorias", name: "resource_categorias")]
final class CategoriasController extends AbstractController
{

    private readonly BuscarCategorias $buscarCategoriasCase;

    public function __construct(BuscarCategorias $buscarCategoriasCase)
    {
        $this->buscarCategoriasCase = $buscarCategoriasCase;
    }

    #[Route("", name: "buscar_categorias", methods: ["GET"])]
    public function buscarCategorias(): JsonResponse
    {
        $categorias = $this->buscarCategoriasCase->executar();

        return $this->json($categorias);
    }
}
