"use client";

import { AddOutlined, RemoveOutlined } from "@mui/icons-material";
import {
    Box, Button,
    Paper, Rating,
    Tab, Tabs,
    Table, TableBody, TableCell,
    TableContainer, TableRow,
    Typography
} from "@mui/material";
import { FC, SyntheticEvent, useState } from "react";

import { Produto } from "@/models";
import { Cabecalho } from "@/ui/components/Cabecalho";
import {
    CardProdutoAvaliacao,
    CardProdutoText
} from "@/ui/components/CardProduto/index.styles";
import {
    BotaoControleQuantidade,
    ContainerAba, ContainerAbas,
    ContainerAdicionarCarrinho,
    ContainerAdicionarRemoverCarrinho,
    ContainerDetalhesProduto,
    ImagemProduto, InfoEstoque,
    PageContainer
} from "./page.styles";


type DetalhesProdutoFragmentProps = {
    produto: Produto;
};

const DetalhesProdutoFragment: FC<DetalhesProdutoFragmentProps> = ({
    produto
}) => {
    const [currentTab, setCurrentTab] = useState(0);
    const [quantidade, setQuantidade] = useState(1);

    const estoque = (
        (produto && produto.estoque >= 10)
            ? "Em estoque"
            : "Últimas unidades"
    );
    const corEstoque = (
        (produto && produto.estoque >= 10)
            ? "success"
            : "warning"
    );

    const handleMudarTab = (_: SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
    };
    const onAdicionar = () => {
        setQuantidade(prev => (
            prev < produto!.estoque
                ? prev + 1
                : prev
        ));
    };
    const onDiminuir = () => {
        setQuantidade(prev => (
            prev > 1
                ? prev - 1
                : prev
        ));
    };

    return (
        <PageContainer>
            <Cabecalho categorias={[]} />

            <ContainerDetalhesProduto>
                <ImagemProduto
                    elevation={2}
                    component="img"
                    src={produto.urlImagem}
                    alt={produto.nome}
                />

                <Box>
                    <Typography variant="h4">
                        {produto.nome}
                    </Typography>

                    <CardProdutoAvaliacao sx={{ mt: 2 }}>
                        <Rating value={produto.avaliacao.media} precision={0.1} readOnly />
                        <CardProdutoText>
                            {`(${produto.avaliacao.quantidade})`}
                        </CardProdutoText>
                    </CardProdutoAvaliacao>

                    <CardProdutoText variant="h3" sx={{ mt: 1 }}>
                        R$ {produto.preco.toFixed(2).replace(".", ",")}
                    </CardProdutoText>

                    <InfoEstoque label={estoque} color={corEstoque} />

                    <Box sx={{ mt: 2 }}>
                        {Object.entries(produto.especificacoes).slice(0, 2).map(([key, value]) => (
                            <Typography key={key}>
                                {`${key}: ${value}`}
                            </Typography>
                        ))}
                    </Box>

                    <ContainerAdicionarCarrinho>
                        <ContainerAdicionarRemoverCarrinho>
                            <BotaoControleQuantidade onClick={onDiminuir}>
                                <RemoveOutlined />
                            </BotaoControleQuantidade>

                            <Typography sx={{ px: 5 }}>
                                {quantidade}
                            </Typography>

                            <BotaoControleQuantidade onClick={onAdicionar}>
                                <AddOutlined />
                            </BotaoControleQuantidade>
                        </ContainerAdicionarRemoverCarrinho>

                        <Button variant="contained">
                            Adicionar ao carrinho
                        </Button>
                    </ContainerAdicionarCarrinho>
                </Box>
            </ContainerDetalhesProduto>

            <ContainerAbas>
                <Tabs value={currentTab} onChange={handleMudarTab}>
                    <Tab label="Descrição" id="produto-tab-0" aria-controls="produto-tabpanel-0" />
                    <Tab label="Especificações" id="produto-tab-1" aria-controls="produto-tabpanel-1" />
                    <Tab label="Avaliações" id="produto-tab-2" aria-controls="produto-tabpanel-2" />
                </Tabs>

                <ContainerAba
                    role="tabpanel"
                    hidden={currentTab !== 0}
                    tabIndex={0}
                    id="produto-tabpanel-0"
                    aria-labelledby="produto-tab-0"
                >
                    <Typography variant="body2">
                        {produto.descricao}
                    </Typography>
                </ContainerAba>

                <ContainerAba
                    role="tabpanel"
                    hidden={currentTab !== 1}
                    tabIndex={1}
                    id="produto-tabpanel-1"
                    aria-labelledby="produto-tab-1"
                >
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                                {Object.entries(produto.especificacoes).map(([key, value]) => (
                                    <TableRow key={key}>
                                        <TableCell>
                                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                                {key}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>{value}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </ContainerAba>

                <ContainerAba
                    role="tabpanel"
                    hidden={currentTab !== 2}
                    tabIndex={2}
                    id="produto-tabpanel-2"
                    aria-labelledby="produto-tab-2"
                >
                    <Typography variant="body2">
                        Avaliações
                    </Typography>
                </ContainerAba>
            </ContainerAbas>
        </PageContainer>
    );
};

export { DetalhesProdutoFragment };
