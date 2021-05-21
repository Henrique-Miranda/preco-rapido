const config = {};

//12% mais 6% com frete gratis, taxa somente no produto
config.shopee = { freedelivery: 18, standard: 12 };

// 16% com antecipação automatica ativada, taxa somente no produto
config.magalu = { standard: 16 };

//Frete gratis Produtos >= R$80,00 16% + valor tabela, custo fixo R$5 abaixo R$79,00 16% + R$5
config.b2w = {
  standard: [16, 5],
  freedelivery: 16,
  // Grupo 1: 0 a 119 pontos
  // Grupo 2: 120 a 149 40% desconto
  // Grupo 3: Apartir de 150 pontos 50% desconto
  //Fulfillment frete gratis pela b2w
  peso: [
    { 1: 32.9 },
    { 2: 35.9 },
    { 3: 36.9 },
    { 4: 45.9 },
    { 5: 67.9 },
    { 6: 91.9 },
    { 7: 104.9 },
    { 8: 112.9 },
    { 9: 119.9 },
  ],
};

//Frete gratis Produtos >= R$79,00, custo fixo R$5 abaixo R$79,00
config.ml = { satandard: [16, 5], freedelivery: 16 };

//16% na soma do produto mais frete
config.amazon = { standard: 16 };

// Em breve
config.via = {};

// Em breve
config.carrefour = {};

// Em breve
config.madeiramadeira = {};

//Em breve
config.GPA = {};

export default config;
