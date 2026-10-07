import { Button, CardMedia, Rating } from "@mui/material";
import { FC, MouseEvent } from "react";

import { Produto } from "@/models";
import {
    CardProdutoAvaliacao, CardProdutoContent,
    CardProduto as CardProdutoStyle,
    CardProdutoText
} from "./index.styles";

type CardProdutoProps = {
    produto: Produto;
    onAdicionarCarrinho: (e: MouseEvent<HTMLButtonElement>, id: string) => void;
};

const CardProduto: FC<CardProdutoProps> = ({
    produto,
    onAdicionarCarrinho
}) => {

    return (
        <CardProdutoStyle>
            <CardMedia
                component="img" height="194"
                image={produto.urlImagem} alt={produto.nome}
            />

            <CardProdutoContent>
                <CardProdutoText variant="subtitle1">
                    {produto.nome}
                </CardProdutoText>

                <CardProdutoText variant="h4" sx={{ mt: 1 }}>
                    R$ {produto.preco.toFixed(2).replace(".", ",")}
                </CardProdutoText>

                <CardProdutoAvaliacao>
                    <Rating value={produto.avaliacao.media} precision={0.1} readOnly />
                    <CardProdutoText>
                        {`(${produto.avaliacao.quantidade})`}
                    </CardProdutoText>
                </CardProdutoAvaliacao>

                <Button
                    variant="contained"
                    onClick={(e: MouseEvent<HTMLButtonElement>) => onAdicionarCarrinho(e, produto.id)}
                >
                    Adicionar ao carrinho
                </Button>
            </CardProdutoContent>
        </CardProdutoStyle>
    );
};

export { CardProduto };
