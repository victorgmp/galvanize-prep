function assertWithinRange(low, high, actual, testName) {
  if (actual >= low && actual <= high) {
    console.log('passed');
  } else {
    console.log(`FAIL [${testName}] "${actual}" not within range ${low} to ${high}`);
  }
}

const blackjackScore = 20;
assertWithinRange(4, 21, blackjackScore, 'blackjack score should be between 4 and 21');
// console output:
// passed

const dieRoll = 1;
assertWithinRange(1, 6, dieRoll, 'die roll should be between 1 and 6');
// console output:
// passed
