export const WHATSAPP_NUMBER = "5571993515860";

export const PRODUCTS = [
  {
    id: 1,
    nome: "Cimento CP II 50kg",
    categoria: "Cimento",
    preco: 39.9,
    estoque: "Em estoque",
    descricao: "Cimento CP II ideal para obras em geral, otimo rendimento e resistencia.",
    unidade: "Saco 50kg",
    dicas: "Armazene em local seco. Para grandes volumes, consulte frete.",
  },
  {
    id: 2,
    nome: "Areia Media (m3)",
    categoria: "Areia",
    preco: 120,
    estoque: "Em estoque",
    descricao: "Areia media lavada, indicada para concreto e assentamento.",
    unidade: "m3",
    dicas: "Entrega por caminhao. Verifique acesso ao local.",
  },
  {
    id: 3,
    nome: "Brita 1 (m3)",
    categoria: "Brita",
    preco: 140,
    estoque: "Sob consulta",
    descricao: "Brita 1 para concreto estrutural, fundacoes e pisos.",
    unidade: "m3",
    dicas: "Disponibilidade varia conforme regiao. Consulte antes.",
  },
  {
    id: 4,
    nome: "Tijolo Ceramico",
    categoria: "Tijolos",
    preco: 1.2,
    estoque: "Em estoque",
    descricao: "Tijolo ceramico para alvenaria, bom isolamento e acabamento.",
    unidade: "Unidade",
    dicas: "Venda por milheiro sob encomenda.",
  },
  {
    id: 5,
    nome: "Bloco de Concreto",
    categoria: "Blocos",
    preco: 3.8,
    estoque: "Em estoque",
    descricao: "Bloco estrutural resistente, ideal para construcao e muros.",
    unidade: "Unidade",
    dicas: "Para grandes quantidades, peca cotacao de frete.",
  },
  {
    id: 6,
    nome: "Cal Hidratada 20kg",
    categoria: "Cal",
    preco: 18.5,
    estoque: "Em estoque",
    descricao: "Cal hidratada para argamassa, reboco e acabamento.",
    unidade: "Saco 20kg",
    dicas: "Use EPI ao manusear. Evite umidade.",
  },
  {
    id: 7,
    nome: "Colher de pedreiro",
    categoria: "Ferramentas",
    preco: 18.5,
    estoque: "Em estoque",
    descricao: "Ferramenta leve e resistente para aplicacao de massa e acabamento.",
    unidade: "Unidade",
    dicas: "Mantenha limpa e seca para aumentar a durabilidade.",
  },
];

export const PRODUCT_CATEGORIES = [
  "Todas",
  ...new Set(PRODUCTS.map((product) => product.categoria)),
];

export function getProductById(id) {
  return PRODUCTS.find((product) => String(product.id) === String(id));
}

export function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
