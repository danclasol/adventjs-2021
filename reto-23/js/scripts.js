function canReconfigure(from, to) {
  console.log(`from: ${from}, to: ${to}`);

  const setFromLength = [...new Set([...from])].length;
  const setToLength = [...new Set([...to])].length;

  // La longitud del string debe ser el mismo.
  if (from.length !== to.length || setFromLength !== setToLength ) {
    return false;
  }

  return true;
}

//al reemplazar el carácter se debe mantener el orden,
//no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo)

// Test Function
console.log(canReconfigure('MMX', 'JAA')) // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

console.log(canReconfigure("CON", "JUU")); // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

console.log(canReconfigure('MMM', 'MID')) // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

console.log(canReconfigure("AA", "MID")); // false -> no tiene la misma longitud

//Show results
const result = document.getElementById("result");
// result.textContent = canReconfigure('BAL', 'LIB');
