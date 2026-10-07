"use client";

import { Box, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardProduto = styled(Card)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const CardProdutoContent = styled(CardContent)`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding-bottom: ${({ theme }) => theme.spacing(2)};
`;

const CardProdutoText = styled(Typography)`
    color: ${({ theme }) => theme.palette.secondary.main};
    font-weight: bold;
`;

const CardProdutoAvaliacao = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)};
    margin-top: auto;
    margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export {
    CardProduto,
    CardProdutoContent,
    CardProdutoAvaliacao,
    CardProdutoText
};
