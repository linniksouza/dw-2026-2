"use client";

import {
    Box,
    Button,
    Grid,
    TextField,
    Typography
} from "@mui/material";
import { FC, useState } from "react";

import {
    ContainerFormRedefinirSenha,
    ContainerTituloPagina
} from "./page.styles";

const RedefinirSenhaFragment: FC = () => {
    const [email, setEmail] = useState("");
    const [novaSenha, setNovaSenha] = useState("");
    const [mesmaNovaSenha, setMesmaNovaSenha] = useState("");

    return (
        <>
            <ContainerTituloPagina>
                <Typography variant="h3" color="secondary">
                    Redefinir senha
                </Typography>
                <Typography color="secondary">
                    Crie uma nova senha para acessar a sua conta
                </Typography>
            </ContainerTituloPagina>

            <ContainerFormRedefinirSenha>
                <Grid container spacing={2}>
                    <Grid size={12}>
                        <TextField
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail..."
                            required
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                            type="password"
                            value={novaSenha}
                            onChange={(e) => setNovaSenha(e.target.value)}
                            placeholder="Senha..."
                            required
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                            type="password"
                            value={mesmaNovaSenha}
                            onChange={(e) => setMesmaNovaSenha(e.target.value)}
                            placeholder="Repetir a senha..."
                            required
                        />
                    </Grid>
                    <Grid size={12}>
                        <Button variant="contained" color="primary">
                            Redefinir
                        </Button>
                    </Grid>
                </Grid>
            </ContainerFormRedefinirSenha>
        </>
    );
};

export { RedefinirSenhaFragment };
