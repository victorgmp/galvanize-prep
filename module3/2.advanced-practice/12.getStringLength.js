function getStringLength(string) {
  let count = 0;
  while (string !== '') {
    console.log('string', string);
    string = string.slice(1);
    count += 1;
  }
  return count;
}

const output = getStringLength('hello');
console.log(output);
