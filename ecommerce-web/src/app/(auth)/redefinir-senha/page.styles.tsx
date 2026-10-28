"use client"

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContainerTituloPagina = styled(Box)`
    margin: ${({ theme }) => `0 ${theme.spacing(3)}`};

    ${({ theme }) => theme.breakpoints.up("sm")} {
        width: 50%;
    }
`;

const ContainerFormRedefinirSenha = styled(Box)`
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing(2)};
    padding: 0 ${({ theme }) => theme.spacing(2)};

    ${({ theme }) => theme.breakpoints.up("sm")} {
        width: 50%;
        padding: 0;
    }
`;

export {
    ContainerFormRedefinirSenha,
    ContainerTituloPagina
};
