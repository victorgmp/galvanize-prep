/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
function getAllKeys(obj) {
  let result = [];

  for (const key in obj) {
    result = [...result, key];
  }

  return result;
}

// function getAllKeys(obj) {
//   return Object.entries(obj).reduce((acc, currValue) => {
//     const [key] = currValue;

//     return [...acc, key];
//   }, []);
// }

const input = {
  name: 'Sam',
  age: 25,
  hasPets: true,
};
console.log(getAllKeys(input));
