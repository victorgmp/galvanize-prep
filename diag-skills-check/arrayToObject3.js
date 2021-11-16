// function transformEmployeeData(employeeData) {
//   return employeeData.reduce((acc, currValue) => {
//     const key = currValue[0][0];
//     const value = currValue[0][1];
//     acc[key] = value;

//     return { ...acc };
//   }, {});
// }
function transformEmployeeData(employeeData) {
  let result = [];

  for (let i = 0; i < employeeData.length; i++) {
    const newObj = {};
    const employeeArray = employeeData[i];

    for (let j = 0; j < employeeArray.length; j++) {
      const key = employeeArray[j][0];
      const value = employeeArray[j][1];

      newObj[key] = value;
    }

    result = [...result, newObj];
  }

  return result;
}

const input = [
  [
    ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk'],
  ],
  [
    ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager'],
  ],
];
console.log(transformEmployeeData(input));
