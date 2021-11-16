const isRotated = (str1, str2) => {
  if (str1 === str2) {
    return true;
  }
  // turn str1 into an array
  const arr1 = str1.split('');
  // take the last value of arra1 and put it at the front
  let lastValue = arr1.pop();
  arr1.unshift(lastValue);

  // while string version of arr1 not equal to original str1
  while (arr1.join('') !== str1) {
    // compare the string version of arr1 with str2
    if (arr1.join('') === str2) {
      // return true if they are the same
      return true;
    }
    // take the last value of arr1 and put it at the front
    lastValue = arr1.pop();
    arr1.unshift(lastValue);
  }

  return false;
};

const isStringRotatedVersion = (strOne, strTwo) => {
  // doble the first string
  const doubleStringOne = strOne + strOne;

  if (doubleStringOne.indexOf(strTwo) !== -1) {
    return true;
  }
  return false;
};

const string_1 = 'hello world';
const string_2 = 'orldhello w';

const result = isRotated(string_1, string_2);
console.log(result); // --> true
