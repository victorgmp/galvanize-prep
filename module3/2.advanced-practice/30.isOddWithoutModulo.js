function isOddWithoutModulo(num) {
  const value = num / 2;
  if (!Number.isInteger(value)) {
    return true;
  }
  return false;
}

const output = isOddWithoutModulo(17);
console.log(output); // --> true
