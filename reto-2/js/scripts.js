function listGifts(letter) {
  // Crear lista de regalos filtrando solo regalos correctos
  const list = letter
    .split(" ")
    .filter((item) => item !== "" && !item.includes("_"));

  // Sacar lista de los totales regalos
  const regalos = {};

  list.forEach((element) => {
    // Si no existe lo insertamos
    if (!Object.keys(regalos).find((el) => el === element)) {
      regalos[element] = 1;

      // Si ya existe, aumentamos el contador de ese regalo
    } else {
      regalos[element] = regalos[element] + 1;
    }
  });

  return regalos;
}

const carta = "bici coche  balón _playstation bici coche peluche";
const regalos = listGifts(carta);
console.log(regalos);

