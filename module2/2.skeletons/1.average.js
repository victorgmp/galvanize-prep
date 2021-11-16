// Skeleton

// FUNCTION DEFINITION(S)
function sum(numbers) {
  // returns the sum of an array of numbers
  return numbers.reduce((acc, value) => acc + value);
}

function average(numbers) {
  // uses sum function
  const total = sum(numbers);
  // returns the average of an array of numbers
  return total / numbers.length;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);

  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}], expected "${expected}", but got "${actual}"`);
  }
}

// TESTS CASES
// success test
const arrayTest1 = [1, 2, 3, 4];
const actual1 = average(arrayTest1);
const expected1 = 2;
assertEqual(actual1, expected1, 'sum and average passed');

// failed test
const arrayTest2 = [1, 2, 3, 4];
const actual2 = average(arrayTest2);
const expected2 = 2;
assertEqual(actual2, expected2, 'sum and average failed');
