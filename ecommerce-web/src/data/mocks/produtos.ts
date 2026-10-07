import { Produto } from "@/models";
import { MOCK_CATEGORIAS } from "./categorias";

export const MOCK_PRODUTOS: Produto[] = [
    // --- ELETRÔNICOS & INFORMÁTICA ---
    {
        id: 'prod-101',
        ean: '7891234560011',
        nome: 'Notebook UltraSlim Pro 15"',
        descricao: 'Notebook ultrafino com processador de última geração, 16GB RAM e SSD NVMe de 512GB. Ideal para trabalho e produtividade.',
        urlImagem: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Processador': 'Intel Core i7 13ª Geração',
            'Memória RAM': '16GB DDR5',
            'Armazenamento': '512GB SSD NVMe'
        },
        avaliacao: { quantidade: 128, media: 4.8 },
        categoria: MOCK_CATEGORIAS[0],
        estoque: 15,
        preco: 4599.90
    },
    {
        id: 'prod-102',
        ean: '7891234560028',
        nome: 'Monitor Ultrawide 34" 144Hz',
        descricao: 'Monitor curvo com resolução QHD, taxa de atualização de 144Hz e HDR400 para máxima imersão.',
        urlImagem: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Tamanho da Tela': '34 polegadas',
            'Resolução': '3440 x 1440 QHD',
            'Taxa de Atualização': '144Hz',
            'Painel': 'VA Curvo (1500R)'
        },
        avaliacao: { quantidade: 85, media: 4.6 },
        categoria: MOCK_CATEGORIAS[0],
        estoque: 8,
        preco: 2399.00
    },
    {
        id: 'prod-103',
        ean: '7891234560035',
        nome: 'Teclado Mecânico Ergonômico Wireless',
        descricao: 'Teclado mecânico sem fio com switches táteis, retroiluminação suave e conexão multidispositivo via Bluetooth.',
        urlImagem: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Layout': 'ABNT2',
            'Tipo de Switch': 'Brown Tátil',
            'Conectividade': 'Bluetooth 5.1 / Wireless 2.4GHz',
            'Bateria': 'Até 40 horas com iluminação'
        },
        avaliacao: { quantidade: 210, media: 4.9 },
        categoria: MOCK_CATEGORIAS[0],
        estoque: 32,
        preco: 489.90
    },
    {
        id: 'prod-104',
        ean: '7891234560042',
        nome: 'Mouse Sem Fio Ergonômico Precision',
        descricao: 'Mouse ergonômico vertical projetado para reduzir o estresse muscular no pulso durante longas jornadas de trabalho.',
        urlImagem: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'DPI Máximo': '4000 DPI',
            'Conexão': 'Bluetooth / Receptor USB',
            'Alimentação': 'Bateria Recarregável USB-C'
        },
        avaliacao: { quantidade: 64, media: 4.5 },
        categoria: MOCK_CATEGORIAS[0],
        estoque: 20,
        preco: 259.00
    },
    {
        id: 'prod-105',
        ean: '7891234560059',
        nome: 'Docking Station USB-C 11 em 1',
        descricao: 'Hub USB-C completo com saídas HDMI 4K, DisplayPort, Ethernet Gigabit, leitor de cartão SD e portas USB 3.0.',
        urlImagem: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Portas HDMI': '2x HDMI 4K@60Hz',
            'Power Delivery': 'Até 100W',
            'Rede': 'RJ45 Gigabit 1000Mbps'
        },
        avaliacao: { quantidade: 43, media: 4.4 },
        categoria: MOCK_CATEGORIAS[0],
        estoque: 12,
        preco: 329.90
    },

    // --- SMARTPHONES & TABLETS ---
    {
        id: 'prod-201',
        ean: '7891234560066',
        nome: 'Smartphone Titan Z Pro 256GB',
        descricao: 'Smartphone topo de linha com câmera tripla de 108MP, tela AMOLED de 120Hz e carregamento ultra-rápido de 67W.',
        urlImagem: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Câmera Traseira': '108MP + 12MP + 5MP',
            'Armazenamento': '256GB',
            'Bateria': '5000 mAh'
        },
        avaliacao: { quantidade: 340, media: 4.7 },
        categoria: MOCK_CATEGORIAS[1],
        estoque: 25,
        preco: 3899.00
    },
    {
        id: 'prod-202',
        ean: '7891234560073',
        nome: 'Tablet CreatePad 11" 128GB',
        descricao: 'Tablet leve e potente, perfeito para estudos, leitura e desenho digital com suporte a caneta stylus.',
        urlImagem: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Armazenamento': '128GB (Expansível via MicroSD)',
            'Processador': 'Octa-Core 2.4GHz'
        },
        avaliacao: { quantidade: 92, media: 4.5 },
        categoria: MOCK_CATEGORIAS[1],
        estoque: 18,
        preco: 1799.90
    },
    {
        id: 'prod-203',
        ean: '7891234560080',
        nome: 'Smartwatch Sport Fit v2',
        descricao: 'Relógio inteligente com monitoramento de frequência cardíaca, oxigênio no sangue, GPS integrado e mais de 50 modos de treino.',
        urlImagem: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Resistência à Água': '5 ATM (50m)',
            'Autonomia da Bateria': 'Até 12 dias',
            'Conectividade': 'Bluetooth 5.2 / GPS'
        },
        avaliacao: { quantidade: 180, media: 4.6 },
        categoria: MOCK_CATEGORIAS[1],
        estoque: 40,
        preco: 549.00
    },
    {
        id: 'prod-204',
        ean: '7891234560097',
        nome: 'Carregador por Indução Fast Charge 15W',
        descricao: 'Base de carregamento sem fio rápida, compatível com os padrões Qi para smartphones e fones de ouvido.',
        urlImagem: 'https://images.unsplash.com/photo-1622445268465-840246e904b5?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Potência': '15W Max',
            'Conector de Entrada': 'USB Type-C',
            'Proteções': 'Contra sobreaquecimento e curto-circuito'
        },
        avaliacao: { quantidade: 75, media: 4.3 },
        categoria: MOCK_CATEGORIAS[1],
        estoque: 50,
        preco: 119.90
    },
    {
        id: 'prod-205',
        ean: '7891234560103',
        nome: 'Capa Protetora de Impacto Armor',
        descricao: 'Capa de alta proteção com cantos reforçados e acabamento antiderrapante para smartphones de 6.7 polegadas.',
        urlImagem: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Material': 'TPU Flexível e Policarbonato',
            'Proteção': 'Certificação Militar de Queda'
        },
        avaliacao: { quantidade: 50, media: 4.2 },
        categoria: MOCK_CATEGORIAS[1],
        estoque: 100,
        preco: 79.90
    },

    // --- ÁUDIO & SOM ---
    {
        id: 'prod-301',
        ean: '7891234560110',
        nome: 'Fone de Ouvido Over-Ear Noise Cancelling',
        descricao: 'Fone de ouvido premium com cancelamento ativo de ruído (ANC), som de alta fidelidade e bateria para 30 horas.',
        urlImagem: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Tipo': 'Over-Ear sem fio',
            'Cancelamento de Ruído': 'ANC Ativo Adaptativo',
            'Autonomia': '30h com ANC ligado',
            'Codec': 'LDAC, AAC, SBC'
        },
        avaliacao: { quantidade: 520, media: 4.9 },
        categoria: MOCK_CATEGORIAS[2],
        estoque: 22,
        preco: 899.90
    },
    {
        id: 'prod-302',
        ean: '7891234560127',
        nome: 'Fone In-Ear TWS Pro',
        descricao: 'Fones totalmente sem fio verdadeiros (TWS) com estojo de carregamento sem fio, resistência a suor e modo ambiente.',
        urlImagem: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Autonomia Total': '24 horas (com estojo)',
            'Proteção': 'IPX5 (Resistente à água/suor)',
            'Driver': 'Dynamic 11mm'
        },
        avaliacao: { quantidade: 310, media: 4.7 },
        categoria: MOCK_CATEGORIAS[2],
        estoque: 35,
        preco: 349.00
    },
    {
        id: 'prod-303',
        ean: '7891234560134',
        nome: 'Caixa de Som Bluetooth Portátil 20W',
        descricao: 'Caixa de som potente e impermeável, perfeita para festas ao ar livre e viagens. Graves encorpados.',
        urlImagem: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Potência': '20W RMS',
            'Proteção': 'IPX7 (Pode ser imersa em água)',
            'Bateria': 'Até 12 horas de reprodução'
        },
        avaliacao: { quantidade: 145, media: 4.8 },
        categoria: MOCK_CATEGORIAS[2],
        estoque: 19,
        preco: 299.90
    },
    {
        id: 'prod-304',
        ean: '7891234560141',
        nome: 'Microfone Condensador USB Studio',
        descricao: 'Microfone profissional para podcasts, streaming e gravação de voz com padrão polar cardioide e pop filter inclusos.',
        urlImagem: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Padrão Polar': 'Cardioide',
            'Taxa de Amostragem': '24-bit / 96kHz',
            'Conexão': 'USB Plug & Play'
        },
        avaliacao: { quantidade: 88, media: 4.6 },
        categoria: MOCK_CATEGORIAS[2],
        estoque: 14,
        preco: 429.00
    },
    {
        id: 'prod-305',
        ean: '7891234560158',
        nome: 'Soundbar 2.1 Canais com Subwoofer Wireless',
        descricao: 'Melhore a experiência de áudio da sua TV com 200W de potência total e grave profundo sem fios espalhados.',
        urlImagem: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Potência Total': '200W RMS',
            'Conexões': 'HDMI ARC, Óptico, Bluetooth'
        },
        avaliacao: { quantidade: 67, media: 4.4 },
        categoria: MOCK_CATEGORIAS[2],
        estoque: 7,
        preco: 1199.00
    },

    // --- CASA INTELIGENTE & AUTOMAÇÃO ---
    {
        id: 'prod-401',
        ean: '7891234560165',
        nome: 'Assistente Virtual Smart Speaker 4ª Geração',
        descricao: 'Caixa de som inteligente com controle por voz para tocar música, controlar dispositivos inteligentes e responder perguntas.',
        urlImagem: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Conectividade': 'Wi-Fi 2.4/5GHz e Bluetooth',
            'Microfones': '4 microfones de longo alcance',
            'Alimentação': 'Bivolt 110V/220V'
        },
        avaliacao: { quantidade: 890, media: 4.8 },
        categoria: MOCK_CATEGORIAS[3],
        estoque: 45,
        preco: 399.00
    },
    {
        id: 'prod-402',
        ean: '7891234560172',
        nome: 'Lâmpada Inteligente RGB Wi-Fi 10W',
        descricao: 'Lâmpada LED com 16 milhões de cores, dimerizável e controlada por aplicativo ou comando de voz.',
        urlImagem: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Soquete': 'E27',
            'Fluxo Luminoso': '810 Lumens',
            'Potência': '10W (Equivalente a 60W incandescente)'
        },
        avaliacao: { quantidade: 412, media: 4.5 },
        categoria: MOCK_CATEGORIAS[3],
        estoque: 80,
        preco: 69.90
    },
    {
        id: 'prod-403',
        ean: '7891234560189',
        nome: 'Fechadura Digital Biométrica Biomaster',
        descricao: 'Fechadura inteligente com abertura por biometria, senhas numéricas, cartão de proximidade e aplicativo móvel.',
        urlImagem: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Capacidade de Biometrias': 'Até 100 usuários',
            'Alimentação': '4 Pilhas AA (Duração estimada de 1 ano)',
            'Espessura da Porta': '35mm a 60mm'
        },
        avaliacao: { quantidade: 78, media: 4.7 },
        categoria: MOCK_CATEGORIAS[3],
        estoque: 10,
        preco: 649.00
    },
    {
        id: 'prod-404',
        ean: '7891234560196',
        nome: 'Câmera de Segurança Interna 360° Full HD',
        descricao: 'Câmera com visão noturna, detecção de movimento, áudio bidirecional e cobertura Pan/Tilt de 360 graus.',
        urlImagem: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Resolução': '1080p Full HD',
            'Visão Noturna': 'Infravermelho até 10m',
            'Armazenamento': 'Cartão MicroSD até 128GB ou Nuvem'
        },
        avaliacao: { quantidade: 165, media: 4.6 },
        categoria: MOCK_CATEGORIAS[3],
        estoque: 28,
        preco: 229.90
    },
    {
        id: 'prod-405',
        ean: '7891234560202',
        nome: 'Tomada Inteligente Wi-Fi 16A',
        descricao: 'Ligue e desligue aparelhos à distância, programe horários e monitore o consumo de energia em tempo real.',
        urlImagem: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Corrente Máxima': '16A (Até 3500W em 220V)',
            'Medição de Energia': 'Sim, via app'
        },
        avaliacao: { quantidade: 230, media: 4.7 },
        categoria: MOCK_CATEGORIAS[3],
        estoque: 60,
        preco: 89.90
    },

    // --- GAMER ---
    {
        id: 'prod-501',
        ean: '7891234560219',
        nome: 'Cadeira Gamer Ergonômica Pro',
        descricao: 'Cadeira gamer reclinável até 180°, com almofadas para lombar e pescoço, braços 4D e pistão a gás classe 4.',
        urlImagem: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Peso Máximo Suportado': '150 kg',
            'Reclinação': '90° a 180°',
            'Material': 'Couro Sintético PU de alta densidade'
        },
        avaliacao: { quantidade: 198, media: 4.7 },
        categoria: MOCK_CATEGORIAS[4],
        estoque: 11,
        preco: 1299.00
    },
    {
        id: 'prod-502',
        ean: '7891234560226',
        nome: 'Headset Gamer 7.1 Surround RGB',
        descricao: 'Headset com drivers de 50mm, som surround virtual 7.1, microfone com cancelamento de ruído e iluminação RGB.',
        urlImagem: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Conexão': 'USB Gold Plated',
            'Driver': '50mm Neodímio',
            'Comprimento do Cabo': '2.2 metros trançado'
        },
        avaliacao: { quantidade: 275, media: 4.5 },
        categoria: MOCK_CATEGORIAS[4],
        estoque: 24,
        preco: 319.90
    },
    {
        id: 'prod-503',
        ean: '7891234560233',
        nome: 'Mouse Gamer 16000 DPI Sensor Óptico',
        descricao: 'Mouse ultra leve para e-Sports, botões programáveis, switches mecânicos e cabo paracord ultra flexível.',
        urlImagem: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Sensor': 'Óptico PixArt 3389',
            'Peso': '68 gramas',
            'Botões': '6 Botões Programáveis'
        },
        avaliacao: { quantidade: 140, media: 4.8 },
        categoria: MOCK_CATEGORIAS[4],
        estoque: 30,
        preco: 279.00
    },
    {
        id: 'prod-504',
        ean: '7891234560240',
        nome: 'Console GameStation 5 1TB',
        descricao: 'Console de última geração com suporte a jogos em 4K até 120fps, SSD ultrarrápido e controle com gatilhos adaptáveis.',
        urlImagem: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Armazenamento': '1TB SSD Customizado',
            'Saída de Vídeo': 'HDMI 2.1 (Até 8K / 4K 120Hz)',
            'Mídia': 'Leitor de Blu-ray Ultra HD'
        },
        avaliacao: { quantidade: 450, media: 4.9 },
        categoria: MOCK_CATEGORIAS[4],
        estoque: 5,
        preco: 4399.00
    },
    {
        id: 'prod-505',
        ean: '7891234560257',
        nome: 'Mousepad Gamer Extra Grande Speed 90x40cm',
        descricao: 'Mousepad gigante com superfície de tecido de baixa fricção e base de borracha antiderrapante com bordas costuradas.',
        urlImagem: 'https://images.unsplash.com/photo-1616440342232-2598379058b7?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Dimensões': '900mm x 400mm x 4mm',
            'Superfície': 'Tecido Micro-Texturizado',
            'Borda': 'Costura dupla reforçada'
        },
        avaliacao: { quantidade: 310, media: 4.8 },
        categoria: MOCK_CATEGORIAS[4],
        estoque: 40,
        preco: 99.90
    },

    // --- ELETRODOMÉSTICOS ---
    {
        id: 'prod-601',
        ean: '7891234560264',
        nome: 'Fritadeira Air Fryer Digital 4.5L',
        descricao: 'Fritadeira sem óleo com painel digital sensível ao toque, 8 funções pré-programadas e cesto antiaderente.',
        urlImagem: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Capacidade': '4.5 Litros',
            'Potência': '1500W',
            'Temperatura': '80°C a 200°C'
        },
        avaliacao: { quantidade: 620, media: 4.8 },
        categoria: MOCK_CATEGORIAS[5],
        estoque: 16,
        preco: 449.90
    },
    {
        id: 'prod-602',
        ean: '7891234560271',
        nome: 'Cafeteira Espresso Automática Pro',
        descricao: 'Prepare espressos, cappuccinos e lattes perfeitos com moedor de grãos integrado e vaporizador de leite.',
        urlImagem: 'https://images.unsplash.com/photo-1517668808822-9f42917ddaa6?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Pressão': '15 Bar',
            'Capacidade de Água': '1.8 Litros',
            'Moedor': 'Cônico de Cerâmica ajustável'
        },
        avaliacao: { quantidade: 115, media: 4.7 },
        categoria: MOCK_CATEGORIAS[5],
        estoque: 9,
        preco: 2899.00
    },
    {
        id: 'prod-603',
        ean: '7891234560278',
        nome: 'Aspirador de Pó Robô Inteligente Mop',
        descricao: 'Aspirador robô que varre, aspira e passa pano automaticamente. Possui sensores anti-queda e mapeamento laser.',
        urlImagem: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Potência de Sucção': '3000 Pa',
            'Autonomia da Bateria': '150 minutos',
            'Navegação': 'LiDAR Laser 360°'
        },
        avaliacao: { quantidade: 280, media: 4.6 },
        categoria: MOCK_CATEGORIAS[5],
        estoque: 14,
        preco: 1599.90
    },
    {
        id: 'prod-604',
        ean: '7891234560285',
        nome: 'Liquidificador de Alta Velocidade 1200W',
        descricao: 'Liquidificador resistente com copo de vidro borossilicato, 6 lâminas de aço inox e função pulsar.',
        urlImagem: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Potência': '1200W',
            'Capacidade da Jarra': '2.0 Litros',
            'Material da Jarra': 'Vidro Resistente a Choque Térmico'
        },
        avaliacao: { quantidade: 95, media: 4.4 },
        categoria: MOCK_CATEGORIAS[5],
        estoque: 22,
        preco: 279.90
    },
    {
        id: 'prod-605',
        ean: '7891234560292',
        nome: 'Umidificador e Purificador de Ar Ultrassônico',
        descricao: 'Umidificador silencioso para ambientes com difusor de óleos essenciais e desligamento automático de segurança.',
        urlImagem: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Capacidade do Reservatório': '3.5 Litros',
            'Autonomia': 'Até 20 horas contínuas',
            'Ruído': 'Menor que 30dB'
        },
        avaliacao: { quantidade: 130, media: 4.5 },
        categoria: MOCK_CATEGORIAS[5],
        estoque: 35,
        preco: 189.00
    },

    // --- MÓVEIS & DECORAÇÃO ---
    {
        id: 'prod-701',
        ean: '7891234560308',
        nome: 'Mesa para Escritório com Regulagem Elétrica',
        descricao: 'Mesa Standing Desk elétrica com memória de altura ajustável, estrutura de aço e tampo de madeira maciça.',
        urlImagem: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Ajuste de Altura': '72cm a 120cm',
            'Tamanho do Tampo': '140cm x 70cm',
            'Capacidade de Carga': '80 kg'
        },
        avaliacao: { quantidade: 88, media: 4.9 },
        categoria: MOCK_CATEGORIAS[6],
        estoque: 6,
        preco: 2199.00
    },
    {
        id: 'prod-702',
        ean: '7891234560315',
        nome: 'Luminária de Mesa Articulada Minimalista',
        descricao: 'Luminária LED para leitura e trabalho com temperatura de cor ajustável (3000K a 6000K) e timer.',
        urlImagem: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Iluminação': 'LED 10W',
            'Níveis de Brilho': '5 níveis',
            'Alimentação': 'USB 5V/2A'
        },
        avaliacao: { quantidade: 110, media: 4.6 },
        categoria: MOCK_CATEGORIAS[6],
        estoque: 27,
        preco: 149.90
    },
    {
        id: 'prod-703',
        ean: '7891234560322',
        nome: 'Cadeira de Escritório Mesh Ergonômica',
        descricao: 'Cadeira de escritório com encosto em tela respirável, apoio lombar ajustável e apoio para os braços.',
        urlImagem: 'https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Material do Encosto': 'Mesh Respirável High-Density',
            'Certificação': 'NR-17 Ergonomia',
            'Garantia': '2 anos'
        },
        avaliacao: { quantidade: 215, media: 4.7 },
        categoria: MOCK_CATEGORIAS[6],
        estoque: 15,
        preco: 849.00
    },
    {
        id: 'prod-704',
        ean: '7891234560339',
        nome: 'Estante Livreiro Estilo Industrial Metal e Madeira',
        descricao: 'Estante versátil com 5 prateleiras para livros, plantas e objetos decorativos. Estrutura metálica com pintura eletrostática.',
        urlImagem: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Dimensões': '180cm (A) x 80cm (L) x 30cm (P)',
            'Material': 'Aço Carbono e MDF 18mm'
        },
        avaliacao: { quantidade: 45, media: 4.5 },
        categoria: MOCK_CATEGORIAS[6],
        estoque: 8,
        preco: 499.90
    },
    {
        id: 'prod-705',
        ean: '7891234560346',
        nome: 'Organizador de Cabos de Mesa em Silicone',
        descricao: 'Kit com 5 presilhas organizadoras de cabos adesivas para manter sua mesa arrumada sem fios caindo.',
        urlImagem: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Quantidade no Kit': '5 Peças',
            'Fixação': 'Fita Adesiva 3M',
            'Compatibilidade': 'Cabos até 6mm de diâmetro'
        },
        avaliacao: { quantidade: 340, media: 4.3 },
        categoria: MOCK_CATEGORIAS[6],
        estoque: 120,
        preco: 39.90
    },

    // --- ESPORTE & FITNESS ---
    {
        id: 'prod-801',
        ean: '7891234560353',
        nome: 'Garrafa Térmica Inox 1 Litro Vacuum',
        descricao: 'Garrafa térmica parede dupla em aço inox que mantém líquidos gelados por até 24 horas e quentes por 12 horas.',
        urlImagem: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Capacidade': '1000ml',
            'Isolamento': 'Vácuo Parede Dupla',
            'Livre de BPA': 'Sim'
        },
        avaliacao: { quantidade: 430, media: 4.9 },
        categoria: MOCK_CATEGORIAS[7],
        estoque: 45,
        preco: 129.90
    },
    {
        id: 'prod-802',
        ean: '7891234560360',
        nome: 'Tapete de Yoga TPE Antiderrapante 6mm',
        descricao: 'Mat de yoga ecológico, altamente aderente, leve e com linhas de alinhamento corporal impressas.',
        urlImagem: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Espessura': '6mm',
            'Dimensões': '183cm x 61cm',
            'Material': 'TPE Reciclável'
        },
        avaliacao: { quantidade: 160, media: 4.7 },
        categoria: MOCK_CATEGORIAS[7],
        estoque: 30,
        preco: 159.00
    },
    {
        id: 'prod-803',
        ean: '7891234560367',
        nome: 'Kit de Bandas de Resistência Elásticas (Mini Bands)',
        descricao: 'Conjunto de 5 elásticos de diferentes intensidades de resistência para treinos de fortalecimento e fisioterapia.',
        urlImagem: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Níveis': 'Ultra Leve, Leve, Médio, Forte, Ultra Forte',
            'Material': 'Látex 100% Natural'
        },
        avaliacao: { quantidade: 280, media: 4.6 },
        categoria: MOCK_CATEGORIAS[7],
        estoque: 70,
        preco: 59.90
    },
    {
        id: 'prod-804',
        ean: '7891234560374',
        nome: 'Corda de Salto com Rolamento de Esferas',
        descricao: 'Corda de alta velocidade ajustável com cabo de aço revestido, perfeita para treinos aeróbicos e Crossfit.',
        urlImagem: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Comprimento do Cabo': '3 metros (Ajustável)',
            'Rolamento': 'Esferas metálicas 360°'
        },
        avaliacao: { quantidade: 95, media: 4.5 },
        categoria: MOCK_CATEGORIAS[7],
        estoque: 50,
        preco: 49.90
    },
    {
        id: 'prod-805',
        ean: '7891234560381',
        nome: 'Fita de Monitoramento Cardíaco Bluetooth/ANT+',
        descricao: 'Cinta peitoral para medição precisa de batimentos cardíacos transmitindo dados via Bluetooth e ANT+.',
        urlImagem: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Conectividade': 'Bluetooth 4.0 / ANT+',
            'Resistência': 'IP67',
            'Bateria': 'CR2032 (Substituível, duração ~1 ano)'
        },
        avaliacao: { quantidade: 52, media: 4.8 },
        categoria: MOCK_CATEGORIAS[7],
        estoque: 15,
        preco: 239.00
    },

    // --- CÂMERAS & IMAGEM ---
    {
        id: 'prod-901',
        ean: '7891234560398',
        nome: 'Câmera Mirrorless 4K Lente 15-45mm',
        descricao: 'Câmera fotográfica compacta sem espelho com gravação em 4K, tela articulada touch e conexão Wi-Fi.',
        urlImagem: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Sensor': 'APS-C CMOS de 24.1 Megapixels',
            'Vídeo': '4K UHD a 24fps / 1080p a 60fps',
            'Lente Inclusa': '15-45mm f/3.5-6.3 IS STM'
        },
        avaliacao: { quantidade: 88, media: 4.8 },
        categoria: MOCK_CATEGORIAS[8],
        estoque: 7,
        preco: 4299.00
    },
    {
        id: 'prod-902',
        ean: '7891234560404',
        nome: 'Drone Dobrável com Câmera 4K e Gimbal 3 Eixos',
        descricao: 'Drone de tamanho compacto com alcance de 10km, transmissão de vídeo HD e tempo de voo de até 31 minutos.',
        urlImagem: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Resolução de Vídeo': '4K a 30fps',
            'Estabilização': 'Gimbal Mecânico de 3 eixos',
            'Autonomia de Voo': '31 minutos por bateria'
        },
        avaliacao: { quantidade: 135, media: 4.9 },
        categoria: MOCK_CATEGORIAS[8],
        estoque: 5,
        preco: 3699.90
    },
    {
        id: 'prod-903',
        ean: '7891234560411',
        nome: 'Iluminador LED Ring Light 12" com Tripé',
        descricao: 'Anel de luz LED ajustável com 3 modos de temperatura de cor e suporte flexível para celular.',
        urlImagem: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Diâmetro': '12 polegadas (30cm)',
            'Altura do Tripé': 'Ajustável até 1.60m',
            'Alimentação': 'USB 5V'
        },
        avaliacao: { quantidade: 320, media: 4.4 },
        categoria: MOCK_CATEGORIAS[8],
        estoque: 40,
        preco: 119.00
    },
    {
        id: 'prod-904',
        ean: '7891234560428',
        nome: 'Cartão de Memória SDXC 128GB V30 Extreme',
        descricao: 'Cartão de memória de alta velocidade ideal para gravação de vídeos em 4K e fotografia sequencial de alta resolução.',
        urlImagem: 'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Velocidade de Leitura': 'Até 170 MB/s',
            'Classe de Velocidade': 'C10, U3, V30',
            'Capacidade': '128GB'
        },
        avaliacao: { quantidade: 240, media: 4.9 },
        categoria: MOCK_CATEGORIAS[8],
        estoque: 65,
        preco: 189.90
    },
    {
        id: 'prod-905',
        ean: '7891234560435',
        nome: 'Mochila Fotográfica Impermeável com Divisórias',
        descricao: 'Mochila acolchoada resistente à água com divisórias modulares personalizáveis para câmeras, lentes e notebook.',
        urlImagem: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Acompanha': 'Capa de Chuva Impermeável'
        },
        avaliacao: { quantidade: 74, media: 4.7 },
        categoria: MOCK_CATEGORIAS[8],
        estoque: 18,
        preco: 299.00
    },

    // --- LIVROS & PAPELARIA ---
    {
        id: 'prod-1001',
        ean: '7891234560442',
        nome: 'Leitor de Livros Digitais e-Reader 16GB',
        descricao: 'E-reader com tela e-ink antirreflexo de 6,8 polegadas, luz embutida ajustável e resistência à água.',
        urlImagem: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Armazenamento': '16GB',
            'Bateria': 'Duração para semanas'
        },
        avaliacao: { quantidade: 580, media: 4.9 },
        categoria: MOCK_CATEGORIAS[9],
        estoque: 25,
        preco: 679.00
    },
    {
        id: 'prod-1002',
        ean: '7891234560449',
        nome: 'Caderno Inteligente A5 Reposicionável',
        descricao: 'Caderno de discos que permite remover e reordenar as folhas quando quiser. Acompanha folhas pautadas e lisas.',
        urlImagem: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Tamanho': 'A5 (155 x 220 mm)',
            'Número de Folhas': '80 folhas 90g/m²',
            'Acessórios': 'Divisórias, bolsa plástica e porta-caneta'
        },
        avaliacao: { quantidade: 210, media: 4.8 },
        categoria: MOCK_CATEGORIAS[9],
        estoque: 35,
        preco: 89.90
    },
    {
        id: 'prod-1003',
        ean: '7891234560456',
        nome: 'Kit Marcadores de Texto Tons Pastéis (6 Cores)',
        descricao: 'Marcadores de texto com ponta chanfrada e tinta de secagem rápida em tons pastéis elegantes.',
        urlImagem: 'https://images.unsplash.com/photo-1585336261026-8f5786372969?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Cores': 'Amarelo, Rosa, Lilás, Azul, Verde, Laranja',
            'Ponta': 'Chanfrada (1mm a 4mm)'
        },
        avaliacao: { quantidade: 390, media: 4.7 },
        categoria: MOCK_CATEGORIAS[9],
        estoque: 90,
        preco: 34.90
    },
    {
        id: 'prod-1004',
        ean: '7891234560463',
        nome: 'Luminária Clip para Leitura Noturna',
        descricao: 'Mini luminária recarregável com clipe para prender no livro ou e-reader. 3 níveis de intensidade de luz amarela.',
        urlImagem: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Autonomia': 'Até 16 horas',
            'Carregamento': 'USB Integrado',
            'Peso': '45 gramas'
        },
        avaliacao: { quantidade: 125, media: 4.6 },
        categoria: MOCK_CATEGORIAS[9],
        estoque: 40,
        preco: 45.00
    },
    {
        id: 'prod-1005',
        ean: '7891234560470',
        nome: 'Kit Canetas Fine Line 0.4mm (10 Cores)',
        descricao: 'Canetas hidrográficas de ponta fina ultra-resistente, ideais para escrita, desenhos e mapas mentais.',
        urlImagem: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80',
        especificacoes: {
            'Espessura da Ponta': '0.4mm',
            'Tinta': 'À base de água, não atravessa a folha'
        },
        avaliacao: { quantidade: 180, media: 4.7 },
        categoria: MOCK_CATEGORIAS[9],
        estoque: 50,
        preco: 49.90
    }
];
