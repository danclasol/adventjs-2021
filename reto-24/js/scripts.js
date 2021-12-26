function checkIsSameTree(treeA, treeB) {
  if (treeA === null && treeB === null) {
    return true;
  }

  if (treeA !== null && treeB !== null) {
    if (treeA.value !== treeB.value) {
      return false;
    }
  } else {
    return false;
  }

  return (
    (checkIsSameTree(treeA.left, treeB.left) || checkIsSameTree(treeA.left, treeB.right)) &&
    (checkIsSameTree(treeA.right, treeB.right) || checkIsSameTree(treeA.right, treeB.left))
  );
}

// Test Function
const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};

// console.log(checkIsSameTree(tree, tree)) // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
};

const tree3 = {
  value: 1,
  left: { value: 5, left: null, right: { value: 4, left: null, right: null } },
  right: { value: 3, left: { value: 2, left: null, right: null }, right: null },
};

// console.log(checkIsSameTree(tree, tree2)) // false
console.log(checkIsSameTree(tree2, tree3)); // true

//Show results
const result = document.getElementById("result");
// result.textContent = checkIsSameTree(tree, tree2);
