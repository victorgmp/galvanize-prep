// Given a list of non-negative integers and a target sum,
// find a pair of numbers that sums to the target sum.

// Example:

// var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// console.log(pair); // --> [4, 5]

const findPairForSum = (nums, target) => {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    // get current value
    const currentValue = nums[i];
    // get needed value
    const neededValue = target - currentValue;
    // search the value in the hash
    const valueInHashMap = hashMap[neededValue];

    if (valueInHashMap != null) {
      return [valueInHashMap, currentValue];
    }

    hashMap[currentValue] = currentValue;
  }
  return [];
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

const actual1 = findPairForSum([3, 34, 4, 12, 5, 2], 9);
const expect1 = [4, 5];
assertArraysEqual(actual1, expect1, 'find the values');

const actual2 = findPairForSum([3, 34, 4, 12, 5, 2], 8);
const expect2 = [3, 5];
assertArraysEqual(actual2, expect2, 'find the values');
