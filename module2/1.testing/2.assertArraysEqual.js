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

const expected = ['b', 'r', 'o', 'k', 'e', 'n'];
const actual = 'broken'.split('');
assertArraysEqual(actual, expected, 'splits string into array of characters');
// console output:
// passed

// const expected = [1, 1, 2, 3, 5, 8, 13];
// const actual = generateFirstNFibonaccis(7);
// assertArraysEqual(actual, expected, 'generates first 7 Fibonacci numbers');
// // console output:
// // FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"
