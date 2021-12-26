function shouldBuyFidelity(times) {
  // Normal
  const ticket = 12;
  const amountNormal = ticket * times;

  //VIP
  const baseVip = 250;
  const discount = 0.75;
  let accumulatedVip = 0;
  let lastTicketPrice = ticket;

  for (let i = 0; i < times; i++) {
    lastTicketPrice = lastTicketPrice * discount;
    accumulatedVip = accumulatedVip + lastTicketPrice;
  }

  const amountVIPTotal = baseVip + accumulatedVip;

  //Evaluate
  return amountVIPTotal < amountNormal;
}

// Test Function
// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$
shouldBuyFidelity(3); // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100); // true -> Mejor comprar tarjeta fidelidad

//Show results
const result = document.getElementById("result");
result.addEventListener("change", (e) => {
  if (shouldBuyFidelity(e.target.value)) {
    result.classList.add("test__result--correct")
    result.classList.remove("test__result--wrong")
  } else {
    result.classList.add("test__result--wrong");
    result.classList.remove("test__result--correct")
  }

  if (e.target.value === "0" || e.target.value === "") {
    result.classList.remove("test__result--correct");
    result.classList.remove("test__result--wrong");
  }
});
