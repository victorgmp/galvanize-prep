function computeSumOfAllElements(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((acc, currValue) => (acc + currValue));
}

const output = computeSumOfAllElements([1, 2, 3]);
console.log(output); // --> 6
