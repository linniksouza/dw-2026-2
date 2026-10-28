<?php

namespace App\Dto;

use Symfony\Component\Serializer\Attribute\SerializedName;

final class RedefinirSenhaDto
{

    #[SerializedName(serializedName: "email")]
    public readonly string $email;
    #[SerializedName(serializedName: "nova_senha")]
    public readonly string $novaSenha;

    public function __construct(string $email, string $novaSenha)
    {
        $this->email = $email;
        $this->novaSenha = $novaSenha;
    }
}
