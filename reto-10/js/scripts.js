function getCoins(change) {
  let coins = [];
  coins[0] = 50; //céntimos
  coins[1] = 20; //céntimos
  coins[2] = 10; //céntimos
  coins[3] = 5; //céntimos
  coins[4] = 2; //céntimos
  coins[5] = 1; //céntimo

  let rest = change;
  let arrayCoins = [0, 0, 0, 0, 0, 0];
  let next = true;

  for (let i = 0; i < coins.length && rest !== 0; i++) {
    if (rest > 0) {
      next = true;

      while (next) {
        if (rest - coins[i] >= 0) {
          rest = rest - coins[i];
          arrayCoins[i] = arrayCoins[i] + 1;
        } else {
          next = false;
        }
      }
    }
  }

  return arrayCoins.reverse();
}

// // Test Function
// const coins = [];
// coins[0] = 1; //céntimo
// coins[1] = 2; //céntimos
// coins[2] = 5; //céntimos
// coins[3] = 10; //céntimos
// coins[4] = 20; //céntimos
// coins[5] = 50; //céntimos

// getCoins(51); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
// getCoins(3); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
// getCoins(5); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
// getCoins(16); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
// getCoins(100); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos

//Show results
const result1 = document.getElementById("result1");
result1.textContent = `Result: ${getCoins(51)}`;

const result2 = document.getElementById("result2");
result2.textContent = `Result: ${getCoins(3)}`;

const result3 = document.getElementById("result3");
result3.textContent = `Result: ${getCoins(5)}`;

const result4 = document.getElementById("result4");
result4.textContent = `Result: ${getCoins(16)}`;

const result5 = document.getElementById("result5");
result5.textContent = `Result: ${getCoins(100)}`;
