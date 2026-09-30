"use client";

import { useState } from "react";

const useAutenticacao = () => {
    const [autenticando, setAutenticando] = useState(false);
    const autenticar = (usuario: string, senha: string): Promise<void> => {
        setAutenticando(true);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                setAutenticando(false);

                if(usuario === "cliente@email.com" && senha === "123456")
                    resolve();
                else
                    reject(new Error("Credenciais inválidas"));
            }, 3000);
        });
    };

    return { autenticando, autenticar };
};

export { useAutenticacao };
