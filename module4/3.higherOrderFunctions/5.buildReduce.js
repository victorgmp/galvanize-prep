function reduce(array, callbackFunction, startingValue) {
  // your code here
  let result = startingValue;
  for (let i = 0; i < array.length; i++) {
    result = callbackFunction(result, array[i]);
  }

  return result;
}

const input = [1, 2, 3, 4];
const output = reduce(input, (sum, value) => sum + value, 0);

console.log(output); // 10
