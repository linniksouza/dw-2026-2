<?php

namespace App\Providers;

use App\Dto\TokenDto;

interface TokenProvider
{

    public function gerarToken(array $payloadData): TokenDto;

    public function validarToken(string $token): ?array;

}
