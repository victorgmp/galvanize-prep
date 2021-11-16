// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray = [...newArray, callbackFunction(array[i])];
  }
  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, (n) => n * n * n);
}

// ASSERTION FUNCTION(S) TO BE USED
function assertArraysEqual(actual, expected, testName) {
  let valuesAreEquals = true;
  const valuesAreSameLength = actual.length === expected.length;

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      valuesAreEquals = false;
      break;
    }
  }

  if (valuesAreEquals && valuesAreSameLength) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
  }
}

// TESTS CASES
// square every number in the array
const testArray1 = [1, 2, 3];
const result1 = cubeAll(testArray1);
const expected1 = [1, 8, 27];
assertArraysEqual(result1, expected1, 'square every number in the array');
