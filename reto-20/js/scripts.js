function pangram(letter) {
  let alphabet = "abcdefghijklmnñopqrstuvwxyz";
  const cleanLetter = letter.toLowerCase().normalize("NFD").replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, "$1$2").normalize();

  for (const character of cleanLetter) {
    if (alphabet) {
      alphabet = alphabet.replace(character, "");
    }
  }

  return alphabet.length === 0;
}

// Test Function
pangram("!!!ExtrÄÑo pan de col y kiwi se quemó bäJo fugaz vah?O!"); // true
// pangram("Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!"); // true
// pangram("Esto es una frase larga pero no tiene todas las letras del abecedario"); // false
// pangram("De la a a la z, nos faltan letras!"); // false

//Show results
const result = document.getElementById("result");
// result.textContent = pangram(
//   "Extraño pan de col y kiwi se quemó bajo fugaz vaho"
// );
