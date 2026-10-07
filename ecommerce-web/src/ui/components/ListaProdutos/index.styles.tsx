"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContainerListaProdutos = styled(Box)`
    flex-grow: 1;
`;

const ContainerCardProdutos = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1)};

    ${({ theme }) => theme.breakpoints.up("sm")} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${({ theme }) => theme.spacing(3)};
        align-items: stretch;
    }
`;

const CardProdutoWrapper = styled(Box)`
    display: flex;
    width: 100%;

    ${({ theme }) => theme.breakpoints.up("md")} {
        width: 30%;
    }
` as typeof Box;

export {
    CardProdutoWrapper,
    ContainerCardProdutos,
    ContainerListaProdutos
};
