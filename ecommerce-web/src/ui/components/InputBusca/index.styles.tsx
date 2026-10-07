"use client";

import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const InputBusca = styled(TextField)`
    background-color: ${({ theme }) => theme.palette.primary.contrastText};
    width: 50%;
    border-radius: ${({ theme }) => theme.spacing(1)};
    margin: ${({ theme }) => `${theme.spacing(2)} 0`};

    & .MuiOutlinedInput-root {
        border-radius: ${({ theme }) => theme.spacing(1)};
    }
` as typeof TextField;

export { InputBusca };
