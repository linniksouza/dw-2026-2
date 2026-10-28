import {
    CategoryOutlined,
    LocalShippingOutlined,
    SecurityOutlined
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

import {
    ContainerAuthApp,
    ContainerDica,
    ContainerInfosApp,
    IconeInfoApp,
    LogoInfoApp,
    PageContainer
} from "./layout.styles";

const AuthLayout = ({
    children
}: LayoutProps<"/">) => {

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

            <ContainerAuthApp>
                {children}
            </ContainerAuthApp>
        </PageContainer>
    );
};

export default AuthLayout;
