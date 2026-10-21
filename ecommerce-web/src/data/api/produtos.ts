import { MOCK_PRODUTOS } from "@/data/mocks/produtos";
import { Produto } from "@/models";

const buscarProdutos = async (): Promise<Produto[]> => {
    const response = await fetch("http://localhost:8000/api/produtos");

    if(!response.ok)
        throw new Error("Não foi possível consultar os dados de produtos.");

    return await response.json() as Produto[];
};

const buscarProduto = async (id: string) => MOCK_PRODUTOS.find(p => p.id === id);

export {
    buscarProduto,
    buscarProdutos
};
