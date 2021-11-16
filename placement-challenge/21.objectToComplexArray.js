function convertObjectToArray(obj) {
  return Object.entries(obj).map((item) => item);
}

const input = {
  name: 'Holly',
  age: 35,
  role: 'producer',
};
// const output = [['name', 'Holly'], ['age', 35], ['role', 'producer']];
convertObjectToArray(input);
