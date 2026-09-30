// src/themes/index.ts
"use client";
import { createTheme } from "@mui/material/styles";

import { components } from "./_components";
import { palette } from "./_palette";
import { tokens } from "./_token";
import { typography } from "./_typography";

export const theme = createTheme({
    palette,
    typography,
    components,
    spacing: tokens.spacing.unit,
    shape: {
        borderRadius: tokens.radius.md,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 1024,
            xl: 1440
        }
    },
    cssVariables: true
});
