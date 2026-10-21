<?php

namespace App\Dto;

use Symfony\Component\Serializer\Attribute\SerializedName;

final class CategoriaProdutoDto
{

    #[SerializedName(serializedName: "id")]
    public readonly string $id;
    #[SerializedName(serializedName: "nome")]
    public readonly string $nome;
    #[SerializedName(serializedName: "descricao")]
    public readonly string $descricao;

    public function __construct(
        string $id,
        string $nome,
        string $descricao
    ) {
        $this->id = $id;
        $this->nome = $nome;
        $this->descricao = $descricao;
    }
}
