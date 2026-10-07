"use client";

import { Box, Chip, IconButton, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const PageContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
`;

const ContainerDetalhesProduto = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(10)};
    margin-top: ${({ theme }) => theme.spacing(5)};
`;

const ImagemProduto = styled(Paper)`
    width: 30%;
    height: 70%;
` as typeof Paper;

const InfoEstoque = styled(Chip)`
    font-weight: bold;
    margin-top: ${({ theme }) => theme.spacing(2)};
`;

const ContainerAdicionarCarrinho = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacing(5)};
    gap: ${({ theme }) => theme.spacing(3)};
`;

const ContainerAdicionarRemoverCarrinho = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #c6c6c6;
    border-radius: ${({ theme }) => theme.spacing(1)};
`;

const BotaoControleQuantidade = styled(IconButton)`
    border: 1px solid #c6c6c6;
    border-radius: 0;
` as typeof IconButton;

const ContainerAbas = styled(Box)`
    margin: ${({ theme }) => `${theme.spacing(5)} ${theme.spacing(5)} 0`};
`;

const ContainerAba = styled(Box)`
    margin: ${({ theme }) => `${theme.spacing(3)} 0`};
`;

export {
    BotaoControleQuantidade,
    ContainerAba,
    ContainerAbas,
    ContainerAdicionarCarrinho,
    ContainerAdicionarRemoverCarrinho,
    ContainerDetalhesProduto,
    ImagemProduto,
    InfoEstoque,
    PageContainer,
};
