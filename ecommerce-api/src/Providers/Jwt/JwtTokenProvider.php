<?php

namespace App\Providers\Jwt;

use App\Dto\TokenDto;
use App\Providers\TokenProvider;
use Exception;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

final class JwtTokenProvider implements TokenProvider
{

    private readonly string $secret;

    private readonly int $expiracao;

    public function __construct(string $secret, int $expiracao)
    {
        $this->secret = $secret;
        $this->expiracao = $expiracao;
    }

    public function gerarToken(array $payloadData): TokenDto
    {
        $issuedAt = time();
        $expiracao = $issuedAt + $this->expiracao;
        $payload = [
            "iat" => $issuedAt,
            "exp" => $expiracao,
            "data" => $payloadData
        ];

        $token = JWT::encode($payload, $this->secret, "HS256");

        return new TokenDto(
            tokenType: "Bearer",
            accessToken: $token,
            expiresIn: $expiracao,
            expiresAt: $this->expiracao,
            payload: $payloadData
        );
    }

    public function validarToken(string $token): ?array
    {
        try{
            $payload = JWT::decode($token, new Key($this->secret, "HS256"));

            return $payload->data;
        }catch(Exception $e){
            return null;
        }
    }
}
