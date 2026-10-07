import { FC } from "react";

import { buscarProduto } from "@/data/api/produtos";
import { DetalhesProdutoFragment } from "./fragment";

type DetalhesProdutoProps = {
    params: Promise<{ id: string; }>;
};

const DetalhesProduto: FC<DetalhesProdutoProps> = async ({
    params
}) => {
    const { id } = await params;
    const produto = await buscarProduto(id);

    if(!produto)
        return <h1>Produto não encontrado</h1>;

    return <DetalhesProdutoFragment produto={produto} />;
};

export default DetalhesProduto;
