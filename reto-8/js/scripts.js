function maxProfit(prices) {
  let profit = -1;

  for (let i=0; i < prices.length; i++) {
    for (let j=i+1; j < prices.length; j++) {      
      if (prices[j]-prices[i] > 0 && prices[j]-prices[i] > profit) {
        profit = prices[j]-prices[i];
      }
    }
  }

  return profit;
}

// Test Function
const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
const pricesEth = [10, 20, 30, 40, 50, 60, 70];  
const pricesDoge = [18, 15, 12, 11, 9, 7];
const pricesAda = [3, 3, 3, 3, 3];

maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)
maxProfit(pricesDoge) // -> -1 (no hay ganancia posible)
maxProfit(pricesAda) // -> -1 (no hay ganancia posible)

//Show results
const result1 = document.getElementById("result1");
result1.textContent = `Result: ${maxProfit(pricesBtc)}, Expected: 16 (compra a 18, vende a 34)`;

const result2 = document.getElementById("result2");
result2.textContent = `Result: ${maxProfit(pricesEth)}, Expected: 60 (compra a 10, vende a 70`;

const result3 = document.getElementById("result3");
result3.textContent = `Result: ${maxProfit(pricesDoge)}, Expected: -1 (no hay ganancia posible)`;

const result4 = document.getElementById("result4");
result4.textContent = `Result: ${maxProfit(pricesAda)}, Expected: -1 (no hay ganancia posible)`;
