function groupBy(collection, it) {
  const reducer = (accumulator, currentValue) => {
    const key = typeof it === "function" ? it(currentValue) : currentValue[it];

    if (!Object.keys(accumulator).includes(`${key}`)) {
      accumulator[key] = [currentValue];
    } else {
      accumulator[key].push(currentValue);
    }

    return accumulator;
  };

  console.log(collection.reduce(reducer, {}));

  return collection.reduce(reducer, {});
}

// Test Function
groupBy([6.1, 4.2, 6.3], Math.floor); // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(["one", "two", "three"], "length"); // { 3: ['one', 'two'], 5: ['three'] }
groupBy([{ age: 23 }, { age: 24 }], "age"); // { 23: [{age: 23}], 24: [{age: 24}] }

groupBy([1397639141184, 1363223700000, 1363223700001], (timestamp) =>
  new Date(timestamp).getFullYear()
);
// // { 2013: [1363223700000], 2014: [1397639141184] }

groupBy(
  [
    { title: "JavaScript: The Good Parts", rating: 8 },
    { title: "JavaScript: The Good Parts II", rating: 8 },
    { title: "Aprendiendo Git", rating: 10 },
    { title: "Clean Code", rating: 9 },
  ],
  "rating"
);
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }

//Show results
const result1 = document.getElementById("result1");
result1.textContent = `Result: ${JSON.stringify(
  groupBy([6.1, 4.2, 6.3], Math.floor)
)}`;

const result2 = document.getElementById("result2");
result2.textContent = `Result: ${JSON.stringify(groupBy(["one", "two", "three"], "length"))}`;

const result3 = document.getElementById("result3");
result3.textContent = `Result: ${JSON.stringify(groupBy([{ age: 23 }, { age: 24 }], "age"))}`;

const result4 = document.getElementById("result4");
result4.textContent = `Result: ${JSON.stringify(groupBy(
  [1397639141184, 1363223700000],
  (timestamp) => new Date(timestamp).getFullYear()
))}`;

const result5 = document.getElementById("result5");
result5.textContent = `Result: ${JSON.stringify(groupBy(
  [
    { title: "JavaScript: The Good Parts", rating: 8 },
    { title: "Aprendiendo Git", rating: 10 },
    { title: "Clean Code", rating: 9 },
  ],
  "rating"
))}`;
