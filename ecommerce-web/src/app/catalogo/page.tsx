import { buscarProdutos } from "@/data/api/produtos";
import { CatalogoProdutosFragment } from "./fragment";

const CatalogoProdutos = async () => {
    const produtos = await buscarProdutos();

    return <CatalogoProdutosFragment produtos={produtos} />;
};

export default CatalogoProdutos;
