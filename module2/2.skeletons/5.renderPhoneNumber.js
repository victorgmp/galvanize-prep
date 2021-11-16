// Skeleton

// FUNCTION DEFINITION(S)
function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function () {
  let string = '';
  string += this.parenthesize(this.getAreaCode());
  string += ' ';
  string += this.getExchangeCode();
  string += '-';
  string += this.getLineNumber();

  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function () {
  return this.slice(0, 3);
};

PhoneNumberFormatter.prototype.getExchangeCode = function () {
  return this.slice(3, 6);
};

PhoneNumberFormatter.prototype.getLineNumber = function () {
  return this.slice(6, 10);
};

PhoneNumberFormatter.prototype.parenthesize = function (string) {
  return `(${string})`;
};

PhoneNumberFormatter.prototype.slice = function (start, end) {
  return this.numbers.slice(start, end).join('');
};

// create a new instance
const formatter = new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]);
console.log('formatter', formatter);

// test individual methods as we go
// const areaCode = formatter.slice(0, 3);
// console.log('areaCode', areaCode);

const formattedNumber = formatter.render();
console.log('formattedNumber', formattedNumber);

// ASSERTION FUNCTION(S) TO BE USED

// TESTS CASES
