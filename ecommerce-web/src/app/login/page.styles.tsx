"use client";

// src/app/login/page.styles.tsx
import { Avatar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const PageContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${({ theme }) => theme.breakpoints.up("sm")} {
        flex-direction: row;
        min-width: 100vw;
        min-height: 100vh;
    }
`;

const ContainerInfosApp = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    padding: ${({ theme }) => theme.spacing(5)} 0;

    ${({ theme }) => theme.breakpoints.up("sm")} {
        width: 40%;
        height: 100vh;
        margin-left: 0;
        margin-right: ${({ theme }) => theme.spacing(1)};
    }
`;

const ContainerLoginApp = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(5)} 0;

    ${({ theme }) => theme.breakpoints.up("sm")} {
        width: 60%;
        min-height: 100vh;
        margin-left: ${({ theme }) => theme.spacing(1)};
        margin-right: 0;
    }
`;

const LogoInfoApp = styled(Box)`
    width: 50%;
    height: 50%;

    ${({ theme }) => theme.breakpoints.up("sm")} {
        width: 100px;
        height: 100px;
    }
` as typeof Box;
const IconeInfoApp = styled(Avatar)`
    background-color: ${({ theme }) => theme.palette.primary.main};
    padding: ${({ theme }) => theme.spacing(3)};
`;
const ContainerDica = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
    margin-top: ${({ theme }) => theme.spacing(3)};
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
    ContainerDica,
    ContainerFormLogin,
    ContainerInfosApp,
    ContainerLoginApp,
    IconeInfoApp,
    LogoInfoApp,
    PageContainer
};
