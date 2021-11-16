// function transformArrayToObject(array) {
//   const result = {};

//   for (let i = 0; i < array.length; i++) {
//     const key = array[i][0];
//     const value = array[i][1];
//     result[key] = value;
//   }

//   return result;
// }

function transformArrayToObject(array) {
  return array.reduce((acc, currValue) => {
    const key = currValue[0];
    const value = currValue[1];
    acc[key] = value;

    return { ...acc };
  }, {});
}

const input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
console.log(transformArrayToObject(input));
