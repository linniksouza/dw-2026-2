<?php

namespace App\Entidades;

class AvaliacaoProduto
{

    private int $quantidade;
    private float $media;

    public function __construct(int $quantidade, float $media)
    {
        $this->quantidade = $quantidade;
        $this->media = $media;
    }

    public function getQuantidade(): int
    {
        return $this->quantidade;
    }

    public function getMedia(): float
    {
        return $this->media;
    }
}
