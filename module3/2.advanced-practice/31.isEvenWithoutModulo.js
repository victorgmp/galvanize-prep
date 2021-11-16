function isEvenWithoutModulo(num) {
  const value = num / 2;
  return Number.isInteger(value);
}

const output = isEvenWithoutModulo(8);
console.log(output); // --> true
