"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";

import { Produto } from "@/models";
import { Cabecalho } from "@/ui/components/Cabecalho";
import { ListaCategorias } from "@/ui/components/ListaCategorias";
import { ListaProdutos } from "@/ui/components/ListaProdutos";
import { ContainerCatalogo } from "./page.styles";

type CatalogoFragmentProps = {
    produtos: Produto[];
};

const CatalogoProdutosFragment: FC<CatalogoFragmentProps> = ({ produtos }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const categorias = [...(new Set(produtos.map(p => p.categoria)))];

    return (
        <>
            <Cabecalho categorias={categorias} />

            <ContainerCatalogo>
                {!isMobile && <ListaCategorias categorias={categorias} />}

                <ListaProdutos produtos={produtos} />
            </ContainerCatalogo>
        </>
    );
};

export { CatalogoProdutosFragment };
