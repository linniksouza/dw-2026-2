<?php

namespace App\Repositorios;

use App\Entidades\Cliente;

interface ClientesRepository
{

    public function buscarCliente(string $email): ?Cliente;

    public function salvarCliente(Cliente $cliente): bool;

}
