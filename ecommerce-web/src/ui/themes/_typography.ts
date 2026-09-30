// src/themes/_typography.ts
import { TypographyVariantsOptions } from "@mui/material/styles";

const typography: TypographyVariantsOptions = {
    fontFamily: "var(--font-inter)",
    h1: {
        fontSize: "2rem",
        fontWeight: 700,
        lineHeight: 1.2,
    },
    h2: {
        fontSize: "1.75rem",
        fontWeight: 700,
        lineHeight: 1.2,
    },
    h3: {
        fontSize: "1.5rem",
        fontWeight: 700,
        lineHeight: 1.25,
    },
    h4: {
        fontSize: "1.25rem",
        fontWeight: 600,
        lineHeight: 1.3,
    },
    h5: {
        fontSize: "1.125rem",
        fontWeight: 600,
        lineHeight: 1.4,
    },
    h6: {
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: 1.4,
    },
    body1: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.5,
    },
    body2: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.5,
    },
    button: {
        fontSize: "0.875rem",
        fontWeight: 600,
        textTransform: "none",
    },
    caption: {
        fontSize: "0.75rem",
        fontWeight: 400,
        lineHeight: 1.4,
    },
};

export { typography };
