<?php

$idade = 17;

if($idade >= 18){
    echo "Bem vindo a festa" . PHP_EOL;
}else{
    echo "Você não pode entrar na festa". PHP_EOL;
}

$cargo = "Estagiário";
switch($cargo){
    case "Engenheiro de Software":
        echo "Responde o Líder Técnico" . PHP_EOL;
        break;
    case "Líder Técnico":
        echo "Responde o Gerente Técnico" . PHP_EOL;
        break;
    case "Gerente Técnico":
        echo "Responde o CTO" . PHP_EOL;
        break;
    default:
        echo "Responde o CTO" . PHP_EOL;
        break;
}
