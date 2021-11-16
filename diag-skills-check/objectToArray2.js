/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
function listAllValues(obj) {
  let result = [];

  for (const key in obj) {
    result = [...result, obj[key]];
  }

  return result;
}

// function listAllValues(obj) {
//   return Object.entries(obj).reduce((acc, currValue) => {
//     const value = currValue[1];

//     return [...acc, value];
//   }, []);
// }

const input = {
  name: 'Krysten',
  age: 33,
  hasPets: false,
};
console.log(listAllValues(input));
