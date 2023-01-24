// Var Global Scope

var price = 7500;
let price2 = 7700;
const PRICE_GLOBAL = 9700;

if (true) {
  console.log(price);
  console.log(price2);
  console.log(PRICE_GLOBAL);
}

if (true) {
  var wprice = 7507;
}

console.log(wprice);

// Block Scope

if (true) {
  let bprice = 700;
  const BP = 1790;
  console.log(bprice);
  console.log(BP);
}

// Function Scope

function add(){
  let price = 700;
  const MULTIPLIER = 10;
  return price * MULTIPLIER;
}

