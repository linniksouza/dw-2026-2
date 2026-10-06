import { MOCK_PRODUTOS } from "@/data/mocks/produtos";

const buscarProdutos = async () => MOCK_PRODUTOS;

const buscarProduto = async (id: string) => MOCK_PRODUTOS.find(p => p.id === id);

export {
    buscarProduto,
    buscarProdutos
};
