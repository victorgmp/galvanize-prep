function checkWinner(arr) {
  const newObj = arr.reduce((acc, currValue, idx, array) => {
    if (currValue !== 0) {
      if (!acc[currValue]) {
        acc[currValue] = 1;
      }
      const prevValue = array[idx - 1];
      if (currValue === prevValue) {
        acc[currValue] += 1;
      }
    }

    return { ...acc };
  }, []);

  if (newObj.black && newObj.black === 4) {
    return 'Black Wins!';
  }
  if (newObj.red && newObj.red === 4) {
    return 'Red Wins!';
  }
  return 'Draw!';
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}], expected "${expected}", but got "${actual}"`);
  }
}

const blackWinner = checkWinner(['black', 'red', 'black', 'black', 'black', 'black', 'red']);
const expected1 = 'Black Wins!';
assertEqual(blackWinner, expected1, 'black element is the winner!!!');

const redWinner = checkWinner([0, 0, 0, 'red', 'red', 'red', 'red']);
const expected2 = 'Red Wins!';
assertEqual(redWinner, expected2, 'red element is the winner!!!');

const draw = checkWinner(['red', 'red', 'red', 'black', 'red', 'black', 0]);
const expected3 = 'Draw!';
assertEqual(draw, expected3, 'the game is draw!!!');
