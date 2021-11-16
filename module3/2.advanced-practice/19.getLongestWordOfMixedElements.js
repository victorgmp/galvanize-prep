function getLongestWordOfMixedElements(arr) {
  if (arr.length === 0) return '';

  const arrayOfStrings = arr.filter((item) => typeof item === 'string');
  if (arrayOfStrings.length === 0) return '';

  const base = arrayOfStrings[0];

  return arrayOfStrings.reduce((acc, currValue) => {
    if (currValue.length > acc.length) return currValue;
    return acc;
  }, base);
}

const output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
