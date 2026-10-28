import { ViaCepEndereco } from "@/models";

const buscarEndereco = async (cep: string): Promise<ViaCepEndereco> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_VIACEP_API_URL}/${cep}/json`);

    if(!response.ok)
        throw new Error(`Erro ao tentar buscar dados do endereço na API do ViaCep: [${response.status}] ${await response.text()}`);

    return await response.json() as ViaCepEndereco;
};

export { buscarEndereco };
