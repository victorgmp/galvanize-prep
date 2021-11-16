// Given a string of even and odd numbers,
// find which is the sole even number or the sole odd number.

// The return value should be 1-indexed, not 0-indexed.

const detectOutlierValue = (input) => {
  const arrayOfStringNums = input.split(' ');
  const odds = [];
  const evens = [];

  for (let i = 0; i < arrayOfStringNums.length; i++) {
    const actualNum = Number(arrayOfStringNums[i]);
    if (actualNum % 2 === 0) {
      evens.push({ value: actualNum, index: i + 1 });
    } else {
      odds.push({ value: actualNum, index: i + 1 });
    }
  }

  return odds.length === 1 ? odds[0].index : evens[0].index;
};

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}], expected "${expected}", but got "${actual}"`);
  }
}

const actual1 = detectOutlierValue('2 4 7 8 10'); // => 3 - Third number is odd, while the rest of the numbers are even
const expect1 = 3;
assertEqual(actual1, expect1, 'one even among odds numbers');

const actual2 = detectOutlierValue('1 10 1 1'); //= > 2 - Second number is even, while the rest of the numbers are odd
const expect2 = 2;
assertEqual(actual2, expect2, 'one odd among even numbers');
