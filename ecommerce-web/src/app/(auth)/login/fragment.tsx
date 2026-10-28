"use client";

import { LockOutlined, PersonOutlined } from "@mui/icons-material";
import {
    Box,
    Button,
    InputAdornment,
    TextField,
    Typography
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

import { useAutenticacao } from "@/ui/hooks/autenticacao";
import { useToast } from "@/ui/hooks/toast";
import {
    ContainerAcaoCadastroApp,
    ContainerAcoesLoginApp,
    ContainerFormLogin,
    ContainerTituloPagina
} from "./page.styles";

const LoginFragment: FC = () => {
    const router = useRouter();
    const { autenticando, autenticar } = useAutenticacao();
    const { showToast } = useToast();

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const onAutenticar = async () => {
        if (!usuario || !(usuario.trim()))
            return;

        if (!senha || !(senha.trim()))
            return;

        try {
            await autenticar(usuario, senha);
            showToast({
                message: "Bem vindo!",
                severity: "success"
            });
            router.replace("/catalogo");
        } catch (e: any) {
            console.error("Erro ao autenticar cliente", e);
            showToast({
                message: `Erro ao autenticar cliente: ${e.message}`,
                severity: "error"
            });
        }
    };

    return (
        <>
            <ContainerTituloPagina>
                <Typography variant="h3" color="secondary">
                    Faça seu login
                </Typography>
                <Typography color="secondary">
                    Acesse sua conta para continuar
                </Typography>
            </ContainerTituloPagina>

            <ContainerFormLogin>
                <TextField
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    placeholder="E-mail ou CPF"
                    sx={{ marginTop: 3 }}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonOutlined />
                                </InputAdornment>
                            )
                        }
                    }}
                />
                <TextField
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Senha"
                    sx={{ marginTop: 3 }}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlined />
                                </InputAdornment>
                            )
                        }
                    }}
                />
            </ContainerFormLogin>

            <ContainerAcoesLoginApp sx={{ marginTop: 2 }}>
                <Button
                    LinkComponent={Link}
                    href="/redefinir-senha"
                    sx={{ marginLeft: "auto" }}
                    variant="text"
                    disabled={autenticando}
                >
                    Esqueceu sua senha?
                </Button>

                <Button
                    sx={{ marginTop: 1 }}
                    variant="contained"
                    onClick={onAutenticar}
                    disabled={autenticando}
                    loading={autenticando}
                >
                    Entrar
                </Button>

                <ContainerAcaoCadastroApp sx={{ marginTop: 2 }}>
                    <Typography variant="body2">
                        Ainda não tem uma conta?
                    </Typography>
                    <Button
                        LinkComponent={Link}
                        href="/novo"
                        variant="text"
                        disabled={autenticando}
                    >
                        Cadastre-se
                    </Button>
                </ContainerAcaoCadastroApp>
            </ContainerAcoesLoginApp>
        </>
    );
};

export { LoginFragment };
