function moneyBox() {
  let saveCoins = 0;

  function countCoins(coins) {
    saveCoins += coins;
    console.log(saveCoins);
  }

  return countCoins;
}

const a1 = moneyBox();

a1(5);
a1(7);
a1(9);
