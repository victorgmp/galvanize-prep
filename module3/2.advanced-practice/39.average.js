function sum(numbers) {
  // returns the sum of an array of numbers
  return numbers.reduce((acc, value) => acc + value);
}

function average(numbers) {
  // uses sum function
  const total = sum(numbers);
  // returns the average of an array of numbers
  return total / numbers.length;
}

const arrayTest1 = [1, 2, 3, 4];
console.log(average(arrayTest1));
