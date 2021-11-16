// FUNCTION DEFINITION(S)
function addFullNameProp(obj) {
  const { firstName, lastName } = obj;

  if (firstName && lastName) {
    obj.fullName = `${firstName} ${lastName}`;
  }

  return obj;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName) {
  const act = JSON.stringify(actual);
  const exp = JSON.stringify(expected);

  if (act === exp) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected ${exp}, but got ${act}`);
  }
}

// TESTS CASES
const person = {
  firstName: 'Jack',
  lastName: 'Jacobs',
};

const expected = {
  firstName: 'Jack',
  lastName: 'Jacobs',
  fullName: 'Jack Jacobs',
};

const actual = addFullNameProp(person);
console.log('expected', expected);

assertObjectsEqual(actual, expected, 'add full name property to input objext');
