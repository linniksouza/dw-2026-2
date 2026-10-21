import { CategoriaProduto } from "@/models";

const buscarCategorias = async (): Promise<CategoriaProduto[]> => {
    const response = await fetch("http://localhost:8000/api/categorias");

    if(!response.ok)
        throw new Error("Não foi possível consultar dados de categorias de produtos.");

    return await response.json() as CategoriaProduto[];
};

export { buscarCategorias };
