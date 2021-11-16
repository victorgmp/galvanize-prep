// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  // creates an object for each string in the input array, with an age of 10 or 11
  const arrayObjects = classList.reduce((acc, value) => {
    const newObj = {
      name: value,
      age: getRandomIntInclusive(10, 11),
    };
    return [...acc, newObj];
  }, []);

  // returns an array of these objects
  return arrayObjects;
}

// ASSERTION FUNCTION(S) TO BE USED
const assertWithRange = (low, high, actual) => {
  if (low <= actual && high >= actual) {
    return true;
  }
  return false;
};

const testdecorateClassListWithAges = (input, output) => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== output[i].name) {
      console.log('FAILED: Incorrect name at index + ', i);
      return;
    }
    // check if the age value for current classListWithAges
    // object is between 10 and 11
    if (assertWithRange(10, 11, output[i].age) === false) {
      console.log('FAILED: Incorrect age at index + ', i);
      return;
    }
  }
  console.log('passed');
};

// function assertEqual(actual, expected, testName) {
//   for (let i = 0; i < actual.length; i++) {
//     if (
//       (actual[i] === expected[i].name)
//       && (expected[i].age >= 10 && expected[i].age <= 11)
//     ) {
//       console.log('passed');
//     } else {
//       console.log(`FAILED [${testName}], expected "${expected}", but got "${actual}"`);
//     }
//   }
// }

// TESTS CASES
const classList = ['Joe', 'Jack', 'John', 'Fred', 'Frank', 'Dora'];

const result1 = decorateClassListWithAges(classList);

// assertEqual(classList, result1, 'array objects with age property');
testdecorateClassListWithAges(classList, result1);
