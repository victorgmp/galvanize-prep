/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
function convertObjectToArray(obj) {
  let result = [];

  for (const key in obj) {
    result = [...result, [key, obj[key]]];
  }

  return result;
}

// function convertObjectToArray(obj) {
//   return Object.entries(obj).reduce((acc, currValue) => [...acc, currValue], []);
// }

const input = {
  name: 'Holly',
  age: 35,
  role: 'producer',
};
console.log(convertObjectToArray(input));
