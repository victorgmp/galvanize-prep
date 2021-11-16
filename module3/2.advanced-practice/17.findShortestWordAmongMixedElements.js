function findShortestWordAmongMixedElements(arr) {
  if (arr.length === 0) return '';

  const arrayOfStrings = arr.filter((item) => typeof item === 'string');
  if (arrayOfStrings.length === 0) return '';

  const base = arrayOfStrings[0];

  return arrayOfStrings.reduce((acc, currValue) => {
    if (currValue.length < acc.length) return currValue;
    return acc;
  }, base);
}

const output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
