function canCarry(capacity, trips) {
  let totalGifts = 0;
  
  //Min length trip
  const min = trips.reduce((prev, curr) => {
    return Math.min(prev, curr[1]);
  }, 99); 

  //Max length trip
  const max = trips.reduce((prev, curr) => {
    return Math.max(prev, curr[2]);
  }, 0); 

  // Trips
  for (let i = min; i <= max; i++) {
    for (let trip of trips) {
      //Delivery point
      if (trip[2] === i) {
        totalGifts -= trip[0];  
      }  

      //Pick up point
      if (trip[1] === i) {        
        totalGifts += trip[0];

        // Capacity exceded
        if (totalGifts > capacity) {
          return false;
        }
      }      
    }
  }

  return true;
}

// Test Function
// console.log(canCarry(4, [[2, 5, 8], [3, 6, 10]])); // false
// En el punto 5 recoge 2 regalos...
// En el punto 6 recoge 3 regalos...
// Del punto 6 al 8 tendría 5 regalos en total
// Y su capacidad es 4... así que ¡no podría!

console.log(canCarry(3, [[1, 1, 5], [2, 2, 10]])); // true
// En el punto 1 recoge 1 regalo...
// En el punto 2 recoge 2 regalos...
// En el punto 5 entrega 1 regalo...
// En el punto 10 entrega 2 regalos...
// ¡Sí puede! Nunca superó la carga máxima de 3 regalos

// canCarry(3, [[2, 1, 5],[3, 5, 7]]) // true -> nunca supera el máximo de capacidad
// canCarry(4, [[2, 3, 8],[2, 5, 7]]) // true -> del punto 5 al 7 lleva 4 regalos y no supera el máximo

// canCarry(2, [[2, 3, 8]]); // false -> no podría ni con el primer viaje
// canCarry(2, [[1, 2, 4], [2, 3, 8]]) // false -> del punto 3 al 4 supera la capacidad máxima porque llevaría 3 regalos

//Show results
const result = document.getElementById("result");
// result.textContent = canCarry(4, [[2, 5, 8], [3, 6, 10]]);
