// function contains(store, product) {
//   let aux = false;

//   // Check all children of the store/deptarment
//   for (dept in store) {
//     // If we find a product that matches
//     if (store[dept] === product.trim() && product !== "vacio") {
//       return true;

//     // Continue searching for the product in the children elements
//     } else if (typeof store[dept] === "object") {
//       aux = contains(store[dept], product);

//       if (aux) {
//         return true;
//       }
//     }
//   }

//   return aux;
// }

function contains(store, product) {
  const inventory = JSON.stringify(store);
  return inventory.includes(`"${product}"`);
}

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta", // <- ¡Está aquí!
    },
  },
  product1: "whisky",
};

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: "cd-rom",
      "otro-objeto": "disquette",
      "otra-cosa": "mando",
    },
  },
};

// Test Function
// console.log(contains(almacen, "whisky")); // true
// console.log(contains(otroAlmacen, "game-boy")); // false

//Show results
const input1 = document.getElementById("almacen1");
const button1 = document.getElementById("button1");
const result1 = document.getElementById("result1");
const input2 = document.getElementById("almacen2");
const button2 = document.getElementById("button2");
const result2 = document.getElementById("result2");

button1.addEventListener("click", () => {
  let exists = contains(almacen, input1.value);

  result1.textContent = exists ? "Existe" : "No existe";
});

button2.addEventListener("click", () => {
  let exists = contains(otroAlmacen, input2.value);

  result2.textContent = exists ? "Existe" : "No existe";
});
