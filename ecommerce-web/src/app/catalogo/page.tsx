import { buscarCategorias } from "@/data/api/categorias";
import { buscarProdutos } from "@/data/api/produtos";
import { CatalogoProdutosFragment } from "./fragment";

const CatalogoProdutos = async () => {
    const categorias = await buscarCategorias();
    const produtos = await buscarProdutos();

    return <CatalogoProdutosFragment categorias={categorias} produtos={produtos} />;
};

export default CatalogoProdutos;
