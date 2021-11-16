function getSumOfAllElementsAtProperty(obj, key) {
  const property = obj[key];
  if (!property || !Array.isArray(property) || property.length === 0) {
    return 0;
  }

  return property.reduce((a, b) => (a + b));
}

const obj = {
  key: [4, 1, 8],
};
const output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
