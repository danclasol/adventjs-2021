function getMinJump(obstacles) {
  const maxPath = Math.max(...obstacles);
  let result = 0;

  for (let i = maxPath; i >= 1; i--) {
    //Comprobar si el salto es viable
    if (!obstacles.some((e) => e % i === 0)) {  
        result = i;
    }
  }

  return result;
}

// Test Function
// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅

// console.log(getMinJump([5, 3, 6, 7, 9])); // -> 4
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// .  .  .  X  .  X  X  X  .  X  .
// S-----------S-----------S------

// console.log(getMinJump([2, 4, 6, 8, 10])); // -> 7
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// .  .  X  .  X  .  X  .  X  .  X
// S--------------------S---------

// console.log(getMinJump([1, 2, 3, 5])); // -> 4
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// .  X  X  X  .  X  .  .  .  .  .
// S-----------S-----------S------

// console.log(getMinJump([3, 7, 5])); // -> 2
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// .  .  .  X  .  X  .  X  .  .  .
// S-----S-----S-----S-----S-----S

// console.log(getMinJump([9, 5, 1])); // -> 2
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// .  X  .  .  .  X  .  .  .  X  .
// S-----S-----S-----S-----S-----S

console.log(getMinJump([14, 10, 8, 2, 3, 6]));
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
// .  .  X  X  .  .  X  .  X  .  X    .   .   .   X
// S--------------------------9--------------------

//Show results
const result = document.getElementById("result");
// result.textContent = getMinJump(obstacles);
