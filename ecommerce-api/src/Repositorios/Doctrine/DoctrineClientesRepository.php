<?php

namespace App\Repositorios\Doctrine;

use App\Entidades\Cliente;
use App\Repositorios\ClientesRepository;

use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NoResultException;

final class DoctrineClientesRepository implements ClientesRepository
{

    private readonly EntityManagerInterface $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function buscarCliente(string $email): ?Cliente
    {
        try{
            $query = (
                $this->em
                    ->createQueryBuilder()
                    ->select("c")
                    ->from(Cliente::class, "c")
                    ->where("c.email = :pEmail")
                    ->getQuery()
            );
    
            $query->setParameter("pEmail", $email);
    
            return $query->getSingleResult();
        }catch(NoResultException $e){
            return null;
        }
    }

    public function salvarCliente(Cliente $cliente): bool
    {
        $this->em->persist($cliente);
        $this->em->flush();

        return true;
    }
}
