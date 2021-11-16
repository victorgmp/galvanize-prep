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
