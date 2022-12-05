function isValid(letter) {
  let result = true;

  // Crear lista de palabras
  const list = letter.split(" ");
  console.log(list);

  // Validar cada palabra de la lista
  list.forEach((item) => {
    console.log(item);

    // Casos con caracteres incorrectos
    const regexInvChar = /[{}]/g;

    if (regexInvChar.test(item)) {
      result = false;
    }

    if (result) {
      // Casos parentesis
      if (item.startsWith("(")) {
        if (item.endsWith(")")) {
          console.log(1);

          //Comprobar interior parentesis
          let aux = item.slice(1, -1);

          const regexParenthesis = /[\(\)]/g;

          if (aux.trim() === "" || regexParenthesis.test(aux)) {
            result = false;
          }
        } else {
          // Casos parentesis sin cerrar
          console.log(2);
          result = false;
        }
      }
    }
  });

  return result;
}

// Test Function
const carta = [
  "bici coche (balón) bici coche peluche", // -> ✅
  "(muñeca) consola bici", // -> ✅
  "bici coche (balón bici coche", // -> ❌
  "peluche (bici [coche) bici coche balón", // -> ❌
  "(peluche {) bici", // -> ❌
  "(()) bici", // ❌
  "(a()",
];

carta.forEach((letter) => {
  console.log(`${isValid(letter)} -> ${letter}`);
});
