<?php

namespace App\Dto;

use Symfony\Component\Serializer\Attribute\SerializedName;
use Symfony\Component\Validator\Constraints as Assert;

final class RedefinirSenhaDto
{

    #[Assert\NotBlank(message: "O e-mail do cliente não pode ficar em branco")]
    #[Assert\Email(message: "O e-mail do cliente está no formato inválido")]
    #[SerializedName(serializedName: "email")]
    public readonly string $email;

    #[Assert\NotBlank(message: "A nova senha de acesso do cliente não pode ficar em branco")]
    #[Assert\Length(min: 5, minMessage: "A nova senha de acesso do cliente deve ter pelo menos 5 caracteres")]
    #[SerializedName(serializedName: "nova_senha")]
    public readonly string $novaSenha;

    public function __construct(string $email, string $novaSenha)
    {
        $this->email = $email;
        $this->novaSenha = $novaSenha;
    }
}
