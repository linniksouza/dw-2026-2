import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { FC } from "react";

import { CategoriaProduto } from "@/models";
import { ContainerListaCategorias, SecaoListaCategorias } from "./index.styles";

type ListaCategoriasProps = {
    categorias: CategoriaProduto[];
    onClickCategoria?: (id: string) => void;
};

const ListaCategorias: FC<ListaCategoriasProps> = ({
    categorias,
    onClickCategoria
}) => {

    return (
        <ContainerListaCategorias>
            <SecaoListaCategorias variant="subtitle1">
                Categorias
            </SecaoListaCategorias>

            <List>
                {categorias.map((cat) => (
                    <ListItem key={cat.id} disablePadding>
                        <ListItemButton onClick={() => onClickCategoria?.(cat.id)}>
                            <ListItemText primary={cat.nome} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </ContainerListaCategorias>

    );
};

export { ListaCategorias };
