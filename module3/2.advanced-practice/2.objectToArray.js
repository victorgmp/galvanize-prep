function getAllKeys(obj) {
  return Object.entries(obj).map((item) => item[0]);
}

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

const input = {
  name: 'Sam',
  age: 25,
  hasPets: true,
};

const alternativeInput = {
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1,
};

const actual1 = getAllKeys(input);
const expected1 = ['name', 'age', 'hasPets'];
assertArraysEqual(actual1, expected1, 'find number 31');

const actual2 = getAllKeys(alternativeInput);
const expected2 = ['a', 'number', 'hungry', 'grammyWins'];
assertArraysEqual(actual2, expected2, 'find number 31');
