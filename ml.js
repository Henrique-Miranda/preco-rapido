import axios from 'axios';

//Preditor de categoria https://api.mercadolibre.com/sites/MLB/domain_discovery/search?limit=1&q=Carrinho controle
// Calcula taxa para anunciar https://api.mercadolibre.com/sites/MLB/listing_prices?price=100&category_id=MLB1055&cy_id=BRL
// pegar sale_fee_amount
//listing_type_id = gold_pro = premium - gold_special = classico

async function listingPrice(desc, price, quantity = 1) {
  let res = await axios.get(
    `https://api.mercadolibre.com/sites/MLB/domain_discovery/search?limit=1&q=${desc}`
  );
  const cat_id = res.data[0].category_id;
  const domain_name = res.data[0].domain_name;
  const cat_name = res.data[0].category_name;

  res = await axios.get(
    `https://api.mercadolibre.com/sites/MLB/listing_prices?price=${price}&category_id=${cat_id}&quantity=${quantity}&cy_id=BRL`
  );
  console.log([domain_name, cat_name]);
  console.log([res.data[0], res.data[2]]);
}

listingPrice('caneta touch', 100);
