// src/app/layout.tsx
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { Metadata } from "next";
import { Inter } from "next/font/google";

import { theme } from "@/ui/themes";
import "./globals.css";
import { ToastProvider } from "@/ui/hooks/toast";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter"
});
const metadata: Metadata = {
    title: "E-Shop",
    description: "Sistema de E-commerce Web",
};

const RootLayout = ({
    children
}: LayoutProps<"/">) => {
    return (
        <html
            lang="pt_BR"
            className={inter.variable}
        >
            <body>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />

                        <ToastProvider>
                            {children}
                        </ToastProvider>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
};

export default RootLayout;

export { metadata };
