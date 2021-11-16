function splitPairs(input) {
  // initialize array result
  let result = [];

  if (input.length === 0) return result;

  // check if string length is odd
  const isOdd = input.length % 2 === 1;

  // iterate string
  for (let i = 0; i < input.length; i += 2) {
    if (input[i + 1] === undefined && isOdd) {
      // if string length is odd, add '_' at the end
      result = [...result, `${input[i]}_`];
    } else {
    // take pairs characters and push into array result
      result = [...result, `${input[i]}${input[i + 1]}`];
    }
  }

  return result;
}

function assertArraysEqual(actual, expected, testName) {
  const sameLength = actual.length === expected.length;
  let sameValues = true;

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      sameValues = false;
      break;
    }
  }

  if (sameValues && sameLength) {
    console.log('passed');
  } else {
    console.log(`failed [${testName}]`);
  }
}

const input1 = 'hola';
const actual1 = splitPairs(input1);
const expected1 = ['ho', 'la'];
assertArraysEqual(actual1, expected1, 'convert even string into pairs');

const input2 = 'perro';
const actual2 = splitPairs(input2);
const expected2 = ['pe', 'rr', 'o_'];
assertArraysEqual(actual2, expected2, 'convert odd string into pairs');

const input3 = '';
const actual3 = splitPairs(input3);
const expected3 = [];
assertArraysEqual(actual3, expected3, 'return an empty arry');
