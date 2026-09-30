// src/themes/_palette.ts
import { PaletteOptions } from "@mui/material/styles";

const palette: PaletteOptions = {
    mode: "light",
    primary: {
        main: "#0170EE",
        dark: "#005BC4",
        light: "#E8F3FF",
        contrastText: "#FFFFFF",
    },
    secondary: {
        main: "#034086",
        dark: "#022B5C",
        light: "#DCEBFA",
        contrastText: "#FFFFFF",
    },
    info: {
        main: "#1D62B5",
        dark: "#174E91",
        light: "#DBEAFE",
        contrastText: "#FFFFFF",
    },
    success: {
        main: "#22C55E",
        dark: "#15803D",
        light: "#DCFCE7",
        contrastText: "#FFFFFF",
    },
    warning: {
        main: "#F59E0B",
        dark: "#B45309",
        light: "#FEF3C7",
        contrastText: "#FFFFFF",
    },
    error: {
        main: "#EF4444",
        dark: "#B91C1C",
        light: "#FEE2E2",
        contrastText: "#FFFFFF",
    },
};

export { palette };
