function multiplyBetween(num1, num2) {
  if (num2 < num1 || num2 === num1) return 0;

  let result = 1;
  for (let i = num1; i < num2; i++) {
    result *= i;
    console.log('i', i);
  }

  return result;
}

const output = multiplyBetween(2, 5);
console.log(output); // --> 24
