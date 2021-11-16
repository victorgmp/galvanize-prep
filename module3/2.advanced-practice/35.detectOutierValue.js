const detectOutlierValue = (input) => {
  const arrayOfStringNums = input.split(' ');
  let odds = [];
  let evens = [];

  for (let i = 0; i < arrayOfStringNums.length; i++) {
    const actualNum = Number(arrayOfStringNums[i]);
    if (actualNum % 2 === 0) {
      evens = [...evens, { value: actualNum, index: i + 1 }];
    } else {
      odds = [...odds, { value: actualNum, index: i + 1 }];
    }
  }

  return odds.length === 1 ? odds[0].index : evens[0].index;
};

detectOutlierValue('2 4 7 8 10'); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue('1 10 1 1'); //= > 2 - Second number is even, while the rest of the numbers are odd
