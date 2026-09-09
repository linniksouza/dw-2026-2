const buscarFeriados = async (ano) => {
    const response = await fetch(`https://brasilapi.com.br/api/feriados/v1/${ano}`);

    if(!response.ok){
        throw new Error(`Erro ao consultar a API: [${response.status}] ${response.statusText} - ${await response.text()}`);
    }

    return await response.json();
};

const formatarData = (strData) => {
    const partes = strData.split("-");

    return `${partes[2]}/${partes[1]}/${partes[0]}`;
};

const formBuscarFeriados = document.getElementById("form-buscar-feriados");
const divFeriados = document.getElementById("feriados");
formBuscarFeriados.addEventListener("submit", async (e) => {
    e.preventDefault();

    const inputAno = formBuscarFeriados.getElementsByTagName("input")[0];
    const feriados = await buscarFeriados(inputAno.value);

    for(const feriado of feriados){
        const divFeriado = document.createElement("div");
        const nomeFeriado = document.createElement("h3");
        const dataFeriado = document.createElement("p");

        nomeFeriado.textContent = feriado.name;
        dataFeriado.textContent = `Data: ${formatarData(feriado.date)}`;
        divFeriado.appendChild(nomeFeriado);
        divFeriado.appendChild(dataFeriado);
        divFeriado.classList.add("feriado");
        divFeriados.appendChild(divFeriado);
    }
});
