"use client";

import { Box, Drawer, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

const Cabecalho = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Logo = styled(Box)`
    margin-left: ${({ theme }) => theme.spacing(2)};
` as typeof Box;

const ContainerBotoesAcaoHeader = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)};
`;

const ContainerCatalogo = styled(Box)`
    display: flex;
    flex-direction: row;
    padding: ${({ theme }) => theme.spacing(3)};
    gap: ${({ theme }) => theme.spacing(3)};
`;

const MenuLateral = styled(Drawer)`
    & .MuiDrawer-paper {
        width: 280px;
        padding: ${({ theme }) => theme.spacing(2)};
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing(2)};
    }
`;

export {
    Cabecalho,
    ContainerCatalogo,
    ContainerBotoesAcaoHeader,
    Logo,
    MenuLateral
};
