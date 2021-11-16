function multiply(num1, num2) {
  let sign = -1;

  if ((num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0)) {
    sign = 1;
  }

  const multiplying = Math.abs(num1);
  const multiplier = Math.abs(num2);

  if (multiplying === 0 || multiplier === 0) {
    return 0;
  }

  let result = 0;
  let counter = 0;

  while (counter < multiplier) {
    result += multiplying;
    counter += 1;
  }

  if (sign === -1) return -result;
  return result;
}

const output = multiply(0, -7);
console.log(output); // --> 28
