// src/themes/_components.ts
import { Components, Theme } from "@mui/material/styles";

import { tokens } from "./_token";

const components: Components<Theme> = {
    MuiCssBaseline: {
        styleOverrides: {
            body: {
                backgroundColor: "#F5FAFE",
            },
            "*": {
                boxSizing: "border-box",
            },
        },
    },
    MuiButton: {
        defaultProps: {
            disableElevation: true,
        },
        styleOverrides: {
            root: ({ theme }) => ({
                minHeight: tokens.control.height,
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: tokens.radius.md,
                fontWeight: 600,
                textTransform: "none",
                "&:focus-visible": {
                    outline: `2px solid ${theme.palette.primary.light}`,
                    outlineOffset: 2,
                },
            }),
            contained: ({ theme }) => ({
                "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                },
            }),
        },
    },
    MuiIconButton: {
        defaultProps: {
            size: "medium",
        },
        styleOverrides: {
            root: ({ theme }) => ({
                borderRadius: tokens.radius.md,
                "&:focus-visible": {
                    outline: `2px solid ${theme.palette.primary.light}`,
                    outlineOffset: 2,
                },
            }),
        },
    },
    MuiTextField: {
        defaultProps: {
            variant: "outlined",
            size: "medium",
            fullWidth: true,
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: ({ theme }) => ({
                minHeight: tokens.control.height,
                borderRadius: tokens.radius.md,
                "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.primary.main,
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.primary.main,
                    borderWidth: 2,
                },
            }),
        },
    },
    MuiCard: {
        styleOverrides: {
            root: ({ theme }) => ({
                borderRadius: tokens.radius.md,
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: tokens.elevation.card,
                backgroundColor: theme.palette.background.paper,
            }),
        },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundImage: "none",
            },
        },
    },
    MuiToggleButton: {
        styleOverrides: {
            root: ({ theme }) => ({
                minHeight: tokens.control.height,
                paddingLeft: 16,
                paddingRight: 16,
                borderRadius: tokens.radius.md,
                borderColor: theme.palette.divider,
                color: theme.palette.text.secondary,
                fontWeight: 600,
                textTransform: "none",
                "&.Mui-selected": {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                    },
                },
            }),
        },
    },
    MuiToggleButtonGroup: {
        styleOverrides: {
            root: {
                width: "100%",
            },
            grouped: {
                flex: 1,
            },
        },
    },
    MuiChip: {
        styleOverrides: {
            root: {
                fontWeight: 500,
                borderRadius: tokens.radius.pill,
            },
        },
    },
    MuiAlert: {
        styleOverrides: {
            root: {
                borderRadius: tokens.radius.md,
            },
        },
    },
    MuiDialog: {
        styleOverrides: {
            paper: {
                borderRadius: tokens.radius.lg,
            },
        },
    },
    MuiAppBar: {
        defaultProps: {
            elevation: 0,
        },
        styleOverrides: {
            root: ({ theme }) => ({
                backgroundColor: theme.palette.secondary.main,
            }),
        },
    },
    MuiDivider: {
        styleOverrides: {
            root: ({ theme }) => ({
                borderColor: theme.palette.divider,
            }),
        },
    },
};

export { components };
