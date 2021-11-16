function multiply(...numbers) {
  if (numbers.length === 1) return numbers[0];
  if (numbers.length === 0) return 0;

  return numbers.reduce((a, b) => a * b, 1);
}

console.log(multiply()); // 0
console.log(multiply(1)); // 1
console.log(multiply(1, 2)); // 2
console.log(multiply(1, 2, 3)); // 6
console.log(multiply(1, 2, 3, 4)); // 24
