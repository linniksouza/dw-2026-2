"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const PageContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContainerCatalogo = styled(Box)`
    display: flex;
    flex-direction: row;
    padding: ${({ theme }) => theme.spacing(3)};
    gap: ${({ theme }) => theme.spacing(3)};
`;

export {
    ContainerCatalogo,
    PageContainer
};
