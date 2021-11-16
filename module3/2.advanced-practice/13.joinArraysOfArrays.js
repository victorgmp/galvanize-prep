function joinArrayOfArrays(arr) {
  return arr.reduce((acc, currValue) => [...acc, ...currValue], []);
}

const output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']
