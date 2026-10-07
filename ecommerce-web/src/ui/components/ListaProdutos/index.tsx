import { Typography } from "@mui/material";
import Link from "next/link";
import { FC, MouseEvent } from "react";

import { Produto } from "@/models";
import { CardProduto } from "@/ui/components/CardProduto";
import {
    CardProdutoWrapper,
    ContainerCardProdutos,
    ContainerListaProdutos
} from "./index.styles";

type ListaProdutosProps = {
    produtos: Produto[];
};

const ListaProdutos: FC<ListaProdutosProps> = ({
    produtos
}) => {
    const onAdicionarCarrinho = (e: MouseEvent<HTMLButtonElement>, id: string) => {
        e.preventDefault();
        e.stopPropagation();

        console.log(`Adicionando o produto com ID '${id}' no carrinho de compras.`);
    };

    return (
        <ContainerListaProdutos>
            <Typography>
                Produtos em destaque
            </Typography>

            <ContainerCardProdutos>
                {produtos.map((produto) => (
                    <CardProdutoWrapper
                        key={produto.id}
                        component={Link}
                        href={`/catalogo/${produto.id}`}
                    >
                        <CardProduto
                            onAdicionarCarrinho={onAdicionarCarrinho}
                            produto={produto}
                        />
                    </CardProdutoWrapper>
                ))}
            </ContainerCardProdutos>
        </ContainerListaProdutos>
    );
};

export { ListaProdutos };
