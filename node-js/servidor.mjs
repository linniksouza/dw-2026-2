import { createServer } from "node:http";

import diasSemana from "./dias-semana.mjs";

const server = createServer(async (_, res) => {
    const dias = await diasSemana();

    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.write(JSON.stringify(dias));
    res.end();
});

server.listen(4567, () => {
    console.log("Servidor HTTP rodando em http://0.0.0.0:4567");
});
