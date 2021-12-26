function countPackages(carriers, carrierID) {
  let result = 0;
  const [,capacity,employees] = carriers.find((el) => el[0] === carrierID);

  // Carrier capacity
  result = capacity;

  // Employees capacity
  employees.forEach((element) => {
    result = result + countPackages(carriers, element);
  });
 
  return result;
}

// Test Function
const carriers = [
  ["dapelu", 5, ["midu", "jelowing"]],
  ["midu", 2, []],
  ["jelowing", 2, []],
];

countPackages(carriers, "dapelu"); // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
  ["lolivier", 8, ["camila", "jesuspoleo"]],
  ["camila", 5, ["sergiomartinez", "conchaasensio"]],
  ["jesuspoleo", 4, []],
  ["sergiomartinez", 4, []],
  ["conchaasensio", 3, ["facundocapua", "faviola"]],
  ["facundocapua", 2, []],
  ["faviola", 1, []],
];

// countPackages(carriers2, "camila"); // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15

//Show results
const result = document.getElementById("result");
result.textContent = countPackages(carriers, "dapelu");
