<?php

class Usuario
{

    private string $nome;
    private int $idade;
    public string $email;
    public string $senha;

    public function __construct(
        string $nome,
        int $idade,
        string $email,
        string $senha
    ) {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->email = $email;
        $this->senha = $senha;
    }

    public function exibirSaudacao(): string
    {
        return "Olá, meu nome é $this->nome e eu tenho $this->idade anos de idade.";
    }

    public function getEmail(): string
    {
        return $this->email;
    }
}


$usuario = new Usuario("Linnik Souza", 28, "linniksouza.prof@gmail.com", "123456");
echo $usuario->exibirSaudacao() . PHP_EOL;
echo $usuario->getEmail() . PHP_EOL;
