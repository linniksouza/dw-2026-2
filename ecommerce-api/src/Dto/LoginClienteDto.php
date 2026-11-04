<?php

namespace App\Dto;

use Symfony\Component\Serializer\Attribute\SerializedName;
use Symfony\Component\Validator\Constraints as Assert;

final class LoginClienteDto
{

    #[Assert\NotBlank(message: "O e-mail do cliente não pode ficar em branco")]
    #[Assert\Email(message: "O e-mail do cliente está no formato inválido")]
    #[SerializedName(serializedName: "email")]
    public readonly string $email;

    #[Assert\NotBlank(message: "A senha de acesso do cliente não pode ficar em branco")]
    #[Assert\Length(min: 5, minMessage: "A senha de acesso do cliente deve ter pelo menos 5 caracteres")]
    #[SerializedName(serializedName: "senha")]
    public readonly string $senha;

    public function __construct(string $email, string $senha)
    {
        $this->email = $email;
        $this->senha = $senha;
    }
}
