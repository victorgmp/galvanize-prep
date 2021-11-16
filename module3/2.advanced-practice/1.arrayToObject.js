function transformFirstAndLast(array) {
  const newObj = {};

  const key = array[0];
  const value = array[array.length - 1];
  newObj[key] = value;

  return newObj;
}

const input = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(input));
