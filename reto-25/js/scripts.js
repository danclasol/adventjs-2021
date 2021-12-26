function canMouseEat(direction, game) {
  let cheese = false;
  const maxWidth = game[0].length - 1;
  const maxHeight = game.length - 1;

  // Get mouse position
  let mousePosition = { x: -1, y: -1 };

  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[i].length; j++) {
      if (game[i][j] === "m") {
        mousePosition = { x: j, y: i };
      }
    }
  }

  // Check moves
  let currentX = mousePosition["x"];
  let currentY = mousePosition["y"];

  while (
    !cheese &&
    currentY >= 0 &&
    currentY <= maxHeight &&
    currentX >= 0 &&
    currentX <= maxWidth
  ) {
    // Check if there is cheese    
    if (game[currentY][currentX] === "*") {
      cheese = true;
    
    // Move to the next position
    } else {
      direction === "up" ? currentY-- : null;
      direction === "down" ? currentY++ : null;
      direction === "left" ? currentX-- : null;
      direction === "right" ? currentX++ : null;
    }
  }

  return cheese;
}

// Test Function
const room = [
  [" ", " ", " "],
  [" ", " ", "m"],
  [" ", " ", "*"],
];

canMouseEat("up", room); // false
canMouseEat("down", room); // true
canMouseEat("right", room); // false
canMouseEat("left", room); // false

const room2 = [
  ["*", " ", " ", " "],
  [" ", "m", "*", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", "*"],
];

canMouseEat("up", room2); // false
canMouseEat("down", room2); // false
canMouseEat("right", room2); // true
canMouseEat("left", room2); // false

//Show results
const resultUp = document.getElementById("resultUp");
resultUp.textContent = canMouseEat("up", room2);

const resultDown = document.getElementById("resultDown");
resultDown.textContent = canMouseEat("down", room2);

const resultRight = document.getElementById("resultRight");
resultRight.textContent = canMouseEat("right", room2);

const resultLeft = document.getElementById("resultLeft");
resultLeft.textContent = canMouseEat("left", room2);
