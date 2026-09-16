import { createServer } from "node:http";

import { app } from "./app";

const server = createServer(app);

server.listen(4567, () => {
    console.log("Servidor HTTP rodando em http://0.0.0.0:4567");
});
