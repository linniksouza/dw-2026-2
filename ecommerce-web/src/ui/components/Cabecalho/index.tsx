"use client";

import {
    MenuOutlined,
    PersonOutlined,
    ShoppingCartOutlined
} from "@mui/icons-material";
import {
    AppBar,
    Box,
    Divider,
    IconButton,
    useMediaQuery,
    useTheme
} from "@mui/material";
import { FC, useState } from "react";

import { CategoriaProduto } from "@/models";
import { InputBusca } from "@/ui/components/InputBusca";
import { ListaCategorias } from "@/ui/components/ListaCategorias";
import {
    Cabecalho as CabecalhoStyled,
    ContainerBotoesAcaoHeader,
    Logo, MenuLateral
} from "./index.styles";

type CabecalhoProps = {
    categorias: CategoriaProduto[];
};

const Cabecalho: FC<CabecalhoProps> = ({ categorias }) => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const toggleDrawer = (open: boolean) => () => {
        setOpenDrawer(open);
    };

    return (
        <>
            <AppBar position="sticky">
                <CabecalhoStyled>
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            edge="start"
                            onClick={toggleDrawer(true)}
                            aria-label="Abrir Menu"
                        >
                            <MenuOutlined />
                        </IconButton>
                    )}

                    <Logo component="img" src="/e-shop-logo-horizontal.png" />

                    {!isMobile && <InputBusca isMobile={isMobile} />}

                    <ContainerBotoesAcaoHeader>
                        <IconButton>
                            <PersonOutlined htmlColor="#ffffff" />
                        </IconButton>
                        <IconButton>
                            <ShoppingCartOutlined htmlColor="#ffffff" />
                        </IconButton>
                    </ContainerBotoesAcaoHeader>
                </CabecalhoStyled>
            </AppBar>

            <MenuLateral
                anchor="left"
                open={openDrawer}
                onClose={toggleDrawer(false)}
            >
                <Box role="presentation">
                    <Box sx={{ mb: 2 }}>
                        <InputBusca isMobile={isMobile} />
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <ListaCategorias
                        categorias={categorias}
                        onClickCategoria={() => toggleDrawer(false)}
                    />
                </Box>
            </MenuLateral>
        </>
    );
};

export { Cabecalho };
