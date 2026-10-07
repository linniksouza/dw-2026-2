import { SearchOutlined } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { FC } from "react";

import { InputBusca as InputBuscaStyled } from "./index.styles";

type InputBuscaProps = {
    isMobile: boolean;
};

const InputBusca: FC<InputBuscaProps> = ({
    isMobile
}) => {

    return (
        <InputBuscaStyled
            variant="outlined"
            placeholder="Buscar produtos..."
            size={isMobile ? "small" : "medium"}
            sx={{ width: isMobile ? "100%" : "50%" }}
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlined />
                        </InputAdornment>
                    )
                }
            }}
        />
    );
};

export { InputBusca };
