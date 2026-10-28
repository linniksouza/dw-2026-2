"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContainerTituloPagina = styled(Box)`
    margin: ${({ theme }) => `0 ${theme.spacing(3)}`};

    ${({ theme }) => theme.breakpoints.up("sm")} {
        width: 50%;
    }
`;

const ContainerFormLogin = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 ${({ theme }) => theme.spacing(2)};

    ${({ theme }) => theme.breakpoints.up("sm")} {
        width: 50%;
        padding: 0;
    }
`;

const ContainerAcoesLoginApp = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 ${({ theme }) => theme.spacing(3)};

    ${({ theme }) => theme.breakpoints.up("sm")} {
        width: 50%;
        padding: 0;
    }
`;

const ContainerAcaoCadastroApp = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export {
    ContainerAcaoCadastroApp,
    ContainerAcoesLoginApp,
    ContainerFormLogin,
    ContainerTituloPagina
};
