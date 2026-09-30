"use client";

import { Alert, AlertColor, Snackbar, Stack } from "@mui/material";
import {
    FC, ReactNode, SyntheticEvent,
    createContext, useCallback, useContext, useState
} from "react";

type ToastOptions = {
    id?: string;
    message: string;
    severity?: AlertColor,
    autoHideDuration?: number;
};

type ToastContextData = {
    showToast: (options: ToastOptions | string, severity?: AlertColor) => void;
};

const ToastContext = createContext<ToastContextData | undefined>(undefined);

const ToastProvider: FC<{ children: ReactNode }> = ({ children }): ReactNode => {
    const [toasts, setToasts] = useState<ToastOptions[]>([]);

    const showToast = useCallback((options: ToastOptions | string, severity: AlertColor = "info") => {
        const id = Math.random().toString(36).substring(2, 9);
        if (typeof options === "string") {
            setToasts((prev) => ([
                ...prev,
                {
                    id,
                    message: options,
                    severity
                }
            ]));
        } else {
            setToasts((prev) => ([
                ...prev,
                {
                    ...options,
                    id: options.id || id
                }
            ]));
        }
    }, []);

    const handleClose = (id?: string) => (_event?: SyntheticEvent | Event, reason?: string) => {
        // if(reason = "goaway")
        setToasts((prev) => prev.filter(t => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}

            <Stack
                spacing={2}
                sx={{ position: "fixed", bottom: 24, right: 24, zIndex: (theme) => theme.zIndex.snackbar }}
            >
                {toasts.map((toast) => (
                    <Snackbar key={toast.id} open={true}
                        autoHideDuration={toast.autoHideDuration ?? 3000}
                        onClose={handleClose(toast.id)}
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        sx={{ position: "static", transform: "none" }}
                    >
                        <Alert
                            onClose={handleClose(toast.id)}
                            severity={toast.severity || "info"}
                            variant="filled" sx={{ width: "100%" }}
                        >
                            {toast.message}
                        </Alert>
                    </Snackbar>
                ))}
            </Stack>
        </ToastContext.Provider>
    );
};

const useToast = (): ToastContextData => {
    const context = useContext(ToastContext);

    if (!context)
        throw new Error("'useToast' deve ser usado dentro de um 'ToastProvider'");

    return context;
};

export {
    type ToastOptions,
    ToastProvider,
    useToast,
};

