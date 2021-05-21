const stores_tax = {
  //12% mais 6% com frete gratis, taxa somente no produto
  Shopee: { 'free-delivery': 18, standard: 12 },

  // 16% com antecipação automatica ativada, taxa somente no produto
  Magalu: { standard: 16 },

  //Frete gratis Produtos >= R$80,00, custo fixo R$5 abaixo R$79,00
  B2w: { 'free-delivery': 16, standard: [16, 5] },

  //Frete gratis Produtos >= R$79,00, custo fixo R$5 abaixo R$79,00
  ML: { 'free-delivery': 16, satandard: [16, 5] },

  //16% na soma do produto mais frete
  Amazon: { standard: 16 },

  // Em breve
  Via: {},

  // Em breve
  Carrefour: {},

  // Em breve
  Madeiramadeira: {},

  //Em breve
  GPA: {},
};

export default stores_tax;
