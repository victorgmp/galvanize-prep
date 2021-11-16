function listAllValues(obj) {
  return Object.entries(obj).map((item) => item[1]);
}

const input = {
  name: 'Krysten',
  age: 33,
  hasPets: false,
};

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

const actual = listAllValues(input);
const expected = ['Krysten', 33, false];

assertArraysEqual(actual, expected, 'transform object values to array');
