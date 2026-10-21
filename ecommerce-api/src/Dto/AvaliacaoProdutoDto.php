<?php

namespace App\Dto;

use Symfony\Component\Serializer\Attribute\SerializedName;

final class AvaliacaoProdutoDto
{

    #[SerializedName(serializedName: "quantidade")]
    public readonly int $quantidade;
    #[SerializedName(serializedName: "media")]
    public readonly float $media;

    public function __construct(int $quantidade, float $media)
    {
        $this->quantidade = $quantidade;
        $this->media = $media;
    }
}
