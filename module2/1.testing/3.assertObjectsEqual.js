function assertObjectsEqual(actual, expected, testName) {
  const act = JSON.stringify(actual);
  const exp = JSON.stringify(expected);

  if (act === exp) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected ${exp}, but got ${act}`);
  }
}

const person = {
  firstName: 'Jac',
  lastName: 'Jacobs',
};
const expected = {
  firstName: 'Jack',
  lastName: 'Jacobs',
};

assertObjectsEqual(person, expected, "updates person's existing first name field");
// console output:
// passed
