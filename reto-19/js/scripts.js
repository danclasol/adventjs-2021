function learn(time, courses) {
  let result = null;

  for (let i = 0; i < courses.length - 1; i++) {
    for (let j = i + 1; j < courses.length; j++) {

      // First assignment
      if (result === null) {
        result = [i, j];
      } else {
        let aux = time - (courses[i] + courses[j]);
        let old = time - (courses[result[0]] + courses[result[1]]);

        if ((old < 0 && aux >= 0) || (aux >= 0 && aux < old)) {
          result = [i, j];
        }
      }
    }
  }

  // No assignment has been done 
  if (time - (courses[result[0]] + courses[result[1]]) < 0) {
    result = null;
    console.log('No assignament');
  }

  console.log(`time: ${time}`);
  console.log(`courses: ${courses}`);
  console.log(result);
  console.log(`-------------------------`);
  return result;
}

// Test Function
learn(10, [2, 3, 8, 1, 4]); // [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.
learn(15, [2, 10, 4, 1]); // [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.
learn(25, [10, 15, 20, 5]); // [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos
learn(8, [8, 2, 1]); // [1, 2] -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.
learn(8, [8, 2, 1, 6]); // [2, 3] -> usamos el máximo tiempo disponible así que [2, 3] usa 7 horas y el [1, 2] sólo usaría 3 horas.
learn(4, [10, 14, 20]); // null -> no nos da tiempo a hacer dos cursos
learn(5, [5, 5, 5]); // null -> no nos da tiempo a hacer dos cursos

//Show results
const result = document.getElementById("result");
// result.textContent = learn(10, [2, 3, 8, 1, 4]);
