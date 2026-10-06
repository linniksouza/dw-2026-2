interface CategoriaProduto {
    id: string;
    nome: string;
    descricao: string;
}

interface AvaliacaoProduto {
    quantidade: number;
    media: number;
}

interface Produto {
    id: string;
    ean: string;
    nome: string;
    descricao: string;
    urlImagem: string;
    especificacoes: {
        [key: string]: string;
    };
    avaliacao: AvaliacaoProduto;
    categoria: CategoriaProduto;
    estoque: number;
    preco: number;
}

export {
    AvaliacaoProduto,
    CategoriaProduto,
    Produto
};
