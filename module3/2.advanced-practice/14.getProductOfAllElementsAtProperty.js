function getProductOfAllElementsAtProperty(obj, key) {
  const property = obj[key];
  if (!property || !Array.isArray(property) || property.length === 0) {
    return 0;
  }
  return property.reduce((a, b) => (a * b));
}

const obj = {
  key: [1, 2, 3, 4],
};
const output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
