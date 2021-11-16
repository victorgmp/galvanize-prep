// Note: This is a simple, albeit temporarily incorrect
// implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// FUNCTION DEFINITION(S)
function every(array, callbackFunction) {
  let doesEveryElementMatch = true;

  for (let i = 0; i < array.length; i++) {
    if (doesEveryElementMatch === false) {
      return doesEveryElementMatch;
    }

    doesEveryElementMatch = callbackFunction(array[i]);
  }

  return doesEveryElementMatch;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
  }
}

const isEven = (num) => {
  const result = num % 2 === 0;
  return result;
};

const isString = (input) => {
  const result = typeof input === 'string';
  return result;
};

// TESTS CASES
// every number in array is even
const testArray1 = [2, 4, 6, 8];
const result1 = every(testArray1, isEven);
const expected1 = true;
assertEqual(result1, expected1, 'every number is even');
// every item in array is a string
const testArray2 = ['hola', 'casa', 'perro', 'gato'];
const result2 = every(testArray2, isString);
const expected2 = true;
assertEqual(result2, expected2, 'every element is a string');
// all elements are not even
const testArray3 = [2, 3, 6, 8];
const result3 = every(testArray3, isEven);
const expected3 = false;
assertEqual(result3, expected3, 'a value is not even');
// an item in array is not a string
const testArray4 = ['hola', 'casa', 'perro', 'gato'];
const result4 = every(testArray4, isString);
const expected4 = true;
assertEqual(result4, expected4, 'an element is not a string');
