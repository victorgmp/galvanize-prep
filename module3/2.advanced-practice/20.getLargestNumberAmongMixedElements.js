function getLargestNumberAmongMixedElements(arr) {
  if (arr.length === 0) return 0;

  const arrayOfStrings = arr.filter((item) => typeof item === 'number');
  if (arrayOfStrings.length === 0) return 0;

  const base = arrayOfStrings[0];

  return arrayOfStrings.reduce((acc, currValue) => {
    if (currValue > acc) return currValue;
    return acc;
  }, base);
}

const output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
