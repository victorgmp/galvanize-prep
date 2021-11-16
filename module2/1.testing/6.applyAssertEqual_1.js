// FUNCTION DEFINITION(S)
function square(n) {
  return n * n;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
  }
}

// TESTS CASES
// TESTS FOR positive integer
const actual1 = square(4);
assertEqual(actual1, 16, '4 * 4 === 16');
// TESTS FOR negative integer
const actual2 = square(-4);
assertEqual(actual2, 16, '4 * 4 === 16');
// TESTS FOR decimal
const actual3 = square(0.5);
assertEqual(actual3, 0.25, '0.5 * 0.5 === 0.25');
// TESTS FOR fail
const actual4 = square(5);
assertEqual(actual4, 20, '5 * 5 === 20');
