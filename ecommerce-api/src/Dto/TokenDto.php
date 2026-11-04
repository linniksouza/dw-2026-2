<?php

namespace App\Dto;

use Symfony\Component\Serializer\Attribute\SerializedName;

final class TokenDto
{

    #[SerializedName(serializedName: "token_type")]
    public readonly string $tokenType;

    #[SerializedName(serializedName: "access_token")]
    public readonly string $accessToken;

    #[SerializedName(serializedName: "expires_in")]
    public readonly int $expiresIn;

    #[SerializedName(serializedName: "expires_at")]
    public readonly int $expiresAt;

    #[SerializedName(serializedName: "payload")]
    public readonly array $payload;

    public function __construct(
        string $tokenType,
        string $accessToken,
        int $expiresIn,
        int $expiresAt,
        array $payload
    ) {
        $this->tokenType = $tokenType;
        $this->accessToken = $accessToken;
        $this->expiresIn = $expiresIn;
        $this->expiresAt = $expiresAt;
        $this->payload = $payload;
    }
}
