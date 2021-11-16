function findSmallestNumberAmongMixedElements(arr) {
  if (arr.length === 0) return 0;

  const arrayOfStrings = arr.filter((item) => typeof item === 'number');
  if (arrayOfStrings.length === 0) return 0;

  const base = arrayOfStrings[0];

  return arrayOfStrings.reduce((acc, currValue) => {
    if (currValue < acc) return currValue;
    return acc;
  }, base);
}

const output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
