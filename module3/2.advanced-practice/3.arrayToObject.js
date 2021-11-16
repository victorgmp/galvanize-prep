const transformArrayToObject = (array) => array.reduce((acc, currValue) => {
  const newObj = {};
  const key = currValue[0];
  const value = currValue[1];
  newObj[key] = value;

  return { ...acc, ...newObj };
}, {});

function assertObjectsEqual(actual, expected, testName) {
  const act = JSON.stringify(actual);
  const exp = JSON.stringify(expected);

  if (act === exp) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected ${exp}, but got ${act}`);
  }
}

const input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

const actual = transformArrayToObject(input);
const expected = {
  make: 'Ford',
  model: 'Mustang',
  year: 1964,
};

assertObjectsEqual(actual, expected, 'actual and expected have the same properties and values');
