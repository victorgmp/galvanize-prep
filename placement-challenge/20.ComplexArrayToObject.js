// function transformEmployeeData(employeeData) {
//   let result = [];

//   for (let i = 0; i < employeeData.length; i++) {
//     const newObj = {};
//     const employeeArray = employeeData[i];

//     for (let j = 0; j < employeeArray.length; j++) {
//       const key = employeeArray[j][0];
//       const value = employeeArray[j][1];

//       newObj[key] = value;
//     }

//     result = [...result, newObj];
//   }

//   return result;
// }

function transformEmployeeData(employeeData) {
  const employeeArrayToObject = (employeeArray) => employeeArray.reduce((acc, currValue) => {
    const key = currValue[0];
    const value = currValue[1];
    acc[key] = value;

    return { ...acc };
  }, {});

  const getEmployeeObject = (employees) => employees.reduce((acc, currValue) => {
    const employeeObj = employeeArrayToObject(currValue);
    console.log('employeeObj', employeeObj);
    return [...acc, employeeObj];
  }, []);

  return getEmployeeObject(employeeData);
}

const input = [
  [
    ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk'],
  ],
  [
    ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager'],
  ],
];

transformEmployeeData(input);
