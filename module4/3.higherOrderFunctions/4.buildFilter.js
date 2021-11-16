function filter(array, callbackFunction) {
  // your code here
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackFunction(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
}

const input = [1, 2, 3, 4];
const output = filter(input, (value) => value % 2 === 0);

console.log(output); // [2, 4]
