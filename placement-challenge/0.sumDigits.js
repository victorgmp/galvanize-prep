function sumDigits(num) {
  let inputIsNegative = false;

  if (num < 0) {
    num = Math.abs(num);
    inputIsNegative = true;
  }

  let total = 0;
  const numToString = num.toString();

  const firstValue = Number(numToString[0]);

  for (let i = 0; i < numToString.length; i++) {
    total += Number(numToString[i]);
  }

  if (inputIsNegative) {
    total -= (2 * firstValue);
    return total;
  }
  return total;
}
