function modulo(num1, num2) {
  const sign = num1 < 0 ? -1 : 1;
  const dividend = Math.abs(num1);
  const divisor = Math.abs(num2);

  if (dividend === 0) {
    return 0;
  }
  if (dividend === 0 || Number.isNaN(dividend) || Number.isNaN(divisor)) {
    return NaN;
  }
  if (dividend < divisor) {
    return sign * dividend;
  }

  let counter = dividend;
  while (counter >= divisor) {
    counter -= divisor;
  }
  return sign * counter;
}

const output = modulo(25, 4);
console.log(output); // --> 1
