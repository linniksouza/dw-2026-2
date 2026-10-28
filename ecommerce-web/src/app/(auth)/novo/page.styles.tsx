"use client";

import { Box, Stepper } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContainerTituloPagina = styled(Box)`
    margin: ${({ theme }) => `0 ${theme.spacing(3)}`};

    ${({ theme }) => theme.breakpoints.up("sm")} {
        width: 50%;
    }
`;

const ContainerFormNovaConta = styled(Box)`
    width: 100%;
    margin-right: ${({ theme }) => theme.spacing(2)};
    padding: 0 ${({ theme }) => theme.spacing(2)};

    ${({ theme }) => theme.breakpoints.up("sm")} {
        /* width: 50%; */
        padding: 0;
    }
`;

const EtapasNovaConta = styled(Stepper)`
    margin-top: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const ContainerAcoesEtapasNovaConta = styled(Box)`
    display: flex;
    justify-content: flex-end;
    gap: ${({ theme }) => theme.spacing(1)};
    margin-top: ${({ theme }) => theme.spacing(1)};
`;

export {
    ContainerAcoesEtapasNovaConta,
    ContainerFormNovaConta,
    ContainerTituloPagina,
    EtapasNovaConta
};
