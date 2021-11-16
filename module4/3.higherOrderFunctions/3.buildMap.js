function map(array, callbackFunction) {
  // your code here
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callbackFunction(array[i]));
  }

  return result;
}

const input = [1, 2, 3, 4];
const output = map(input, (value) => value + 1);

console.log(output); // [2, 3, 4, 5]
