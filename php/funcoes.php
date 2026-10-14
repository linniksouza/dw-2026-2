<?php

function soma(int $a, int $b): int
{
    return $a + $b;
}

// $valor = soma(2, 3);
// echo $valor . PHP_EOL;

$area = fn(int $raio) => M_PI * $raio ** 2;

$valorArea = $area(2);
echo "A área do circulo de raio 2 é $valorArea". PHP_EOL;
