function daysToXmas(date) {
  const diaNavidad = new Date("Dec 25, 2021");
  const diffTime = diaNavidad - date;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

  return diffDays;
}

// Test Function
const date1 = new Date("Dec 1, 2021");
const date2 = new Date("Dec 24, 2021 00:00:01");
const date3 = new Date("Dec 24, 2021 23:59:59");
const date4 = new Date("December 20, 2021 03:24:00");
const date5 = new Date("December 26, 2021");

console.log(`Hoy es ${date1}, faltan ${daysToXmas(date1)} días para navidad`); // 24
console.log(`Hoy es ${date2}, faltan ${daysToXmas(date2)} días para navidad`); // 1
console.log(`Hoy es ${date3}, faltan ${daysToXmas(date3)} días para navidad`); // 1
console.log(`Hoy es ${date4}, faltan ${daysToXmas(date4)} días para navidad`); // 5
console.log(`Hoy es ${date5}, faltan ${daysToXmas(date5)} días para navidad`); // -1