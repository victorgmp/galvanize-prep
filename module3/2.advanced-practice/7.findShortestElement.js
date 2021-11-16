function findShortestElement(arr) {
  if (arr.length === 0) return '';

  const base = arr[0];

  return arr.reduce((acc, currValue) => {
    if (currValue.length < acc.length) {
      return currValue;
    }

    return acc;
  }, base);
}
