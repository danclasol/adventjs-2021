// __*__
// _***_
// *****
// __#__
// __#__

function createXmasTree(height) {
  let tree = "";

  //1. Montar arbol
  for (let i = 1; i <= height; i++) {
    //Pintar relleno izquierda
    for (let j = i; j < height; j++) {
      tree = tree + "_";
    }

    //Pintar arbol
    for (let j = 1; j <= 2 * i - 1; j++) {
      tree = tree + "*";
    }

    //Pintar relleno derecha
    for (let j = i; j < height; j++) {
      tree = tree + "_";
    }

    tree = tree + "\n";
  }

  //2. Añadir la base
  //Pintar relleno izquierda
  for (let i = 1; i <= 2; i++) { // La base son 2 líneas
    for (let j = 1; j < height; j++) {
      tree = tree + "_";
    }

    //Pintar base
    for (let j = 1; j <= 1; j++) { // El tronco es solo un caracter
      tree = tree + "#";
    }

    //Pintar relleno derecha
    for (let j = 1; j < height; j++) {
      tree = tree + "_";
    }

    if (i===1) {
      tree = tree + "\n";
    }
  }

  console.log(tree);

  return tree;
}

// Test Function
console.log(createXmasTree(3));