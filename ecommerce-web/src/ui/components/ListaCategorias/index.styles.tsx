"use client";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContainerListaCategorias = styled(Box)`
    width: 250px;
    flex-shrink: 0;
`;

const SecaoListaCategorias = styled(Typography)`
    font-weight: bold;
    margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export { ContainerListaCategorias, SecaoListaCategorias };
