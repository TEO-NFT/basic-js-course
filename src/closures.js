function moneyBox() {
  let saveCoins = 0;

  function countCoins(coins) {
    saveCoins += coins;
    console.log(saveCoins);
  }

  return countCoins;
}

const saveCoin = moneyBox();

saveCoin(5);
saveCoin(7);
saveCoin(15);


