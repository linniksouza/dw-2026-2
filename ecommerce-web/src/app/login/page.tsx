"use client";

import {
    Box,
    Button,
    InputAdornment,
    Typography,
    TextField
} from "@mui/material";
import {
    CategoryOutlined,
    LocalShippingOutlined,
    LockOutlined,
    PersonOutlined,
    SecurityOutlined
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useAutenticacao } from "@/ui/hooks/autenticacao";
import { useToast } from "@/ui/hooks/toast";
import {
    ContainerAcaoCadastroApp,
    ContainerAcoesLoginApp,
    ContainerDica,
    ContainerFormLogin,
    ContainerInfosApp,
    ContainerLoginApp,
    IconeInfoApp,
    LogoInfoApp,
    PageContainer
} from "./page.styles";

const Login = () => {
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
        <PageContainer>
            <ContainerInfosApp>
                <LogoInfoApp component="img" src="/e-shop-logo-white.png" alt="E-Shop Logo" />
                <Typography variant="h4" sx={{ marginTop: 2 }}>
                    Sua loja on-line, do seu jeito.
                </Typography>

                <Box sx={{ marginTop: 5 }}>
                    <ContainerDica>
                        <IconeInfoApp>
                            <CategoryOutlined />
                        </IconeInfoApp>

                        <Box>
                            <Typography sx={{ fontWeight: "bold" }}>
                                Produtos de qualidade
                            </Typography>
                            <Typography>
                                As melhores marcas e preços
                            </Typography>
                        </Box>
                    </ContainerDica>

                    <ContainerDica>
                        <IconeInfoApp>
                            <SecurityOutlined />
                        </IconeInfoApp>

                        <Box>
                            <Typography sx={{ fontWeight: "bold" }}>
                                Compra segura
                            </Typography>
                            <Typography>
                                Seus dados protegidos
                            </Typography>
                        </Box>
                    </ContainerDica>

                    <ContainerDica>
                        <IconeInfoApp>
                            <LocalShippingOutlined />
                        </IconeInfoApp>

                        <Box>
                            <Typography sx={{ fontWeight: "bold" }}>
                                Entrega para todo o Brasil
                            </Typography>
                            <Typography>
                                Com rapidez e praticidade
                            </Typography>
                        </Box>
                    </ContainerDica>
                </Box>
            </ContainerInfosApp>

            <ContainerLoginApp>
                <Box sx={{ width: "50%" }}>
                    <Typography variant="h3" color="secondary">
                        Faça seu login
                    </Typography>
                    <Typography color="secondary">
                        Acesse sua conta para continuar
                    </Typography>
                </Box>

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
                            variant="text"
                            disabled={autenticando}
                        >
                            Cadastre-se
                        </Button>
                    </ContainerAcaoCadastroApp>
                </ContainerAcoesLoginApp>
            </ContainerLoginApp>
        </PageContainer>
    );
};

export default Login;
