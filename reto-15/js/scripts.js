function checkSledJump(heights) {
  let prevPoint = -1;
  let status = null; //0 baja, 1 sube
  let error = false;

  for (let i = 0; i < heights.length && error === false; i++) {
    // Esta subiendo
    if (prevPoint < heights[i] ) {
      prevPoint = heights[i];
      status = 1;

    // Esta bajando
    } else if (prevPoint > heights[i]) {
      status = 0;
      prevPoint = heights[i];
    
    // Subida no estricta
    } else if (prevPoint === heights[i]) {
      error = true;
    }

    // Comprobar si finaliza sin bajar
    if (i === heights.length-1 && status === 1) {
      error = true;
    }
  }

  return !error
}

// Test Function
// checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
// checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
// checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
// checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

// checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
// checkSledJump([1, 2, 3]) // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!

//Show results
const result = document.getElementById("result");
result.textContent = checkSledJump([1, 2, 3, 2, 1]);
