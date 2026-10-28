<?php

declare(strict_types=1);

namespace App\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20261027234056 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE clientes (
              cpf VARCHAR(11) NOT NULL,
              nome VARCHAR(200) NOT NULL,
              data_nascimento DATE NOT NULL,
              email VARCHAR(200) NOT NULL,
              telefone VARCHAR(13) DEFAULT NULL,
              senha TEXT NOT NULL,
              cep VARCHAR(8) NOT NULL,
              logradouro VARCHAR(150) NOT NULL,
              numero VARCHAR(10) NOT NULL,
              complemento VARCHAR(150) NOT NULL,
              ponto_referencia VARCHAR(150) NOT NULL,
              bairro VARCHAR(100) NOT NULL,
              cidade VARCHAR(150) NOT NULL,
              uf VARCHAR(2) NOT NULL,
              PRIMARY KEY (cpf)
            )
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE clientes');
    }
}
