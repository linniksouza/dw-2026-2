<?php

namespace App\Repositorios\FileJson;

use App\Providers\JsonFileProvider;
use App\Repositorios\CategoriasRepository;

final class FileJsonCategoriasRepository implements CategoriasRepository
{

    private readonly JsonFileProvider $jsonProvider;

    public function __construct(JsonFileProvider $jsonProvider)
    {
        $this->jsonProvider = $jsonProvider;
    }

    public function buscarCategorias(): array
    {
        return $this->jsonProvider->lerCategorias();
    }
}
