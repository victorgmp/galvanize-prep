// FUNCTION DEFINITION(S)
function addOne(val) {
  return val + 1;
}

// ASSERTION FUNCTION(S) TO BE USED
function assert(condition, testName) {
  if (condition) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}]`);
  }
}

// TESTS FOR isOne
const result1 = addOne(1);
assert(result1 === 2, 'should return result of a positive input number added to 1');

const result2 = addOne(-2);
assert(result2 === 1, 'should return result of a negative input number added to 1');

console.log('result1', result1);
console.log('result2', result2);
