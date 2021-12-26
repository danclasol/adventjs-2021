function decodeNumbers(symbols) {
  const arraySymbols = symbols.split("");
  const codes = { ".": 1, ",": 5, ":": 10, ";": 50, "!": 100 };
  let result = 0;

  for (let i = 0; i < arraySymbols.length; i++) {
    if (codes[arraySymbols[i]] < codes[arraySymbols[i+1]]) {
      result = result - codes[arraySymbols[i]];
    } else {
      result = result + codes[arraySymbols[i]];
    }
  }

  return result;
}

// Test Function
decodeNumbers("..."); // 3
decodeNumbers(".,"); // 4 (-1 + 5)
decodeNumbers(",."); // 6 (5 + 1)
decodeNumbers(",..."); // 8 (5 + 3)
decodeNumbers(".........!"); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers(".;"); // 49 (50 - 1)
decodeNumbers("..,"); // 5 (-1 + 1 + 5)
decodeNumbers("..,!"); // 95 (1 - 1 - 5 + 100)
decodeNumbers(".;!"); // 49 (-1 -50 + 100)
decodeNumbers("!!!"); // 300
decodeNumbers(";!"); // 50
decodeNumbers(";.W"); // NaN

//Show results
const result = document.getElementById("result");
// result.textContent = decodeNumbers([1, 2, 3, 2, 1]);
