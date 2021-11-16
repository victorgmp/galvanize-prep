function repeatString(string, num) {
  let count = 0;
  let newString = '';

  while (count < num) {
    newString += string;
    count += 1;
  }

  return newString;
}

const output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
