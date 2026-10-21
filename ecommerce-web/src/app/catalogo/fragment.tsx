"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";

import { CategoriaProduto, Produto } from "@/models";
import { Cabecalho } from "@/ui/components/Cabecalho";
import { ListaCategorias } from "@/ui/components/ListaCategorias";
import { ListaProdutos } from "@/ui/components/ListaProdutos";
import { ContainerCatalogo } from "./page.styles";

type CatalogoFragmentProps = {
    categorias: CategoriaProduto[];
    produtos: Produto[];
};

const CatalogoProdutosFragment: FC<CatalogoFragmentProps> = ({
    produtos,
    categorias
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
