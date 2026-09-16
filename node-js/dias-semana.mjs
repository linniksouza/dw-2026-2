import fs from "node:fs/promises";

const buscarDiasSemana = async () => {
    const conteudo = await fs.readFile("./dias-semana.txt", {
        encoding: "utf8"
    });

    return conteudo.split("\n");
};

export default buscarDiasSemana;
