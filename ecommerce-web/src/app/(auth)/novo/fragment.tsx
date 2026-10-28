"use client";

import {
    Box,
    Button,
    Checkbox,
    Grid,
    Step,
    StepLabel,
    TextField,
    Typography
} from "@mui/material";
import { DateTime } from "luxon";
import { FC, useState } from "react";

import { buscarEndereco } from "@/data/api/endereco";
import { useToast } from "@/ui/hooks/toast";
import {
    ContainerAcoesEtapasNovaConta,
    ContainerFormNovaConta,
    ContainerTituloPagina,
    EtapasNovaConta
} from "./page.styles";

const NovaContaFragment: FC = () => {
    const { showToast } = useToast();

    // Controle das etapas de preenchimento do cadastro...
    const [activeStep, setActiveStep] = useState(0);
    const steps = ["Dados Pessoais", "Endereço", "Senha"];

    // Dados pessoais...
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataNascimento, setDataNascimento] = useState(DateTime.now());
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    // Endereço...
    const [buscandoEndereco, setBuscandoEndereco] = useState(false);
    const [digitarEndereco, setDigitarEndereco] = useState(false);
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [semNumero, setSemNumero] = useState(false);
    const [complemento, setComplemento] = useState("");
    const [referencia, setReferencia] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");

    // Senha...
    const [senha, setSenha] = useState("");
    const [mesmaSenha, setMesmaSenha] = useState("");

    const onBuscarEndereco = async () => {
        if(!cep || cep.trim().replace(/\D+/, "").length !== 8){
            showToast({
                message: "Preencha o CEP corretamente",
                severity: "warning"
            });
            return;
        }

        setBuscandoEndereco(true);
        try{
            const endereco = await buscarEndereco(cep);

            setLogradouro(endereco.logradouro);
            setBairro(endereco.bairro);
            setCidade(endereco.localidade);
            setUf(endereco.uf);
            if(endereco.complemento)
                setComplemento(endereco.complemento);
        }catch(e: any){
            console.error(e);
            showToast({
                message: "Não foi possível consultar as informações do endereço",
                severity: "error"
            });
            setDigitarEndereco(true);
        }finally{
            setBuscandoEndereco(false);
        }
    };
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const validarDadosPessoais = () => {
        if(!nome || nome.trim().length < 3)
            throw new Error("O nome deve ter pelo menos 3 caracteres");
        if(!cpf || cpf.trim().replace(/\D+/, "").length !== 11)
            throw new Error("O CPF deve ter exatamente 11 dígitos");
        if(dataNascimento.diffNow().years < 18)
            throw new Error("O cliente deve ter pelo menos 18 anos");
        if(!email || email.trim().length < 10)
            throw new Error("O endereço de e-mail deve ser válido");
        if(!telefone || telefone.trim().replace(/\D+/, "").length < 10)
            throw new Error("O número de telefone deve ser válido");
    };
    const validarEndereco = () => {
        if(
            (!cep || cep.trim().replace(/\D+/, "").length !== 8) ||
            (!logradouro || logradouro.trim().length < 4) ||
            (!numero || numero.trim().length === 0) ||
            (!bairro || bairro.trim().length === 0) ||
            (!cidade || cidade.trim().length === 0) ||
            (!uf || uf.trim().length === 0)
        ){
            throw new Error("Os dados do endereço devem ser válidos");
        }
    };
    const validarSenha = () => {
        if(!senha || senha.trim().length < 5)
            throw new Error("A senha deve ter pelo menos 5 caracteres");
        if(mesmaSenha === senha)
            throw new Error("As senhas não são iguais");
    };
    const handleSubmit = () => {
        try{
            validarDadosPessoais();
            validarEndereco();
            validarSenha();
        }catch(e: any){
            const erro = e as Error;
            console.info({ error: erro.message });
            showToast({
                message: erro.message,
                severity: "error",
                autoHideDuration: 6000
            });
            return;
        }
    };

    return (
        <>
            <ContainerTituloPagina>
                <Typography variant="h3" color="secondary">
                    Crie uma nova conta
                </Typography>
                <Typography color="secondary">
                    Preencha as informações para criar a conta
                </Typography>
            </ContainerTituloPagina>

            <EtapasNovaConta activeStep={activeStep}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </EtapasNovaConta>

            <ContainerFormNovaConta>
                {activeStep === 0 && (
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <TextField
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                placeholder="Nome completo..."
                                required
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                                placeholder="CPF..."
                                required
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                type="date"
                                value={dataNascimento.toFormat("yyyy-mm-dd")}
                                onChange={(e) => {
                                    const data = DateTime.fromFormat(e.target.value, "yyyy-mm-dd");
                                    if(data.isValid){
                                        setDataNascimento(data);
                                    }
                                }}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
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
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                placeholder="DDD + Número"
                                required
                            />
                        </Grid>
                    </Grid>
                )}

                {activeStep === 1 && (
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                                placeholder="CEP..."
                                required
                            />
                        </Grid>

                        <Grid size={{ xs: 4, md: 2 }} sx={{ alignSelf: "center" }}>
                            <Button
                                variant="contained"
                                onClick={onBuscarEndereco}
                                loading={buscandoEndereco}
                                disabled={buscandoEndereco || digitarEndereco}>
                                Consultar
                            </Button>
                        </Grid>

                        <Grid size={{ xs: 8, md: 6 }} sx={{ alignSelf: "center" }}>
                            <Checkbox disabled={buscandoEndereco} checked={digitarEndereco} onChange={() => setDigitarEndereco(!digitarEndereco)} /> Digitar Endereço
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                value={logradouro}
                                onChange={(e) => setLogradouro(e.target.value)}
                                placeholder="Logradouro..."
                                required
                                disabled={!digitarEndereco}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                value={numero}
                                onChange={(e) => setNumero(e.target.value)}
                                placeholder="Número..."
                                disabled={semNumero}
                            />

                            <Checkbox disabled={buscandoEndereco} checked={semNumero} onChange={() => setSemNumero(!semNumero)} /> Sem número
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                value={complemento}
                                onChange={(e) => setComplemento(e.target.value)}
                                required
                                placeholder="Complemento..."
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                value={referencia}
                                onChange={(e) => setReferencia(e.target.value)}
                                placeholder="Ponto de referência..."
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                value={bairro}
                                onChange={(e) => setBairro(e.target.value)}
                                placeholder="Bairro..."
                                required
                                disabled={!digitarEndereco}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                                placeholder="Cidade..."
                                required
                                disabled={!digitarEndereco}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                value={uf}
                                onChange={(e) => setUf(e.target.value)}
                                placeholder="Estado..."
                                required
                                disabled={!digitarEndereco}
                            />
                        </Grid>
                    </Grid>
                )}

                {activeStep === 2 && (
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                type="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                placeholder="Senha..."
                                required
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                type="password"
                                value={mesmaSenha}
                                onChange={(e) => setMesmaSenha(e.target.value)}
                                placeholder="Repetir a senha..."
                                required
                            />
                        </Grid>
                    </Grid>
                )}

                <ContainerAcoesEtapasNovaConta>
                    {activeStep > 0 && (
                        <Button
                            variant="outlined"
                            onClick={handleBack}
                            disabled={buscandoEndereco}
                        >
                            Voltar
                        </Button>
                    )}
                    {activeStep < steps.length - 1 ? (
                        <Button
                            variant="outlined"
                            onClick={handleNext}
                            disabled={buscandoEndereco}
                        >
                            Próximo
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            disabled={buscandoEndereco}
                        >
                            Cadastrar
                        </Button>
                    )}
                </ContainerAcoesEtapasNovaConta>
            </ContainerFormNovaConta>
        </>
    );
};

export { NovaContaFragment };
