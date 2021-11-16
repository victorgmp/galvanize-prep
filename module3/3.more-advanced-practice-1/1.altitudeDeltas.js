function sumAltitudeDeltas(heights, start, end) {
  // create a result sum
  let sum = 0;

  // iterate from start to end
  for (let i = start; i < end; i++) {
    // set current diff to be next minus current
    const diff = heights[i + 1] - heights[i];
    // if diff is positive
    console.log('diff', diff);
    if (diff > 0) {
      // double diff and add to sum
      sum += (diff * 2);
    } else {
      // subtract diff from sum
      sum -= diff;
    }

    console.log('sum', sum);
  }

  return sum;
}

const output_0 = sumAltitudeDeltas([1, 2, 3, 1], 0, 3);
console.log(output_0); // --> 6

const output_1 = sumAltitudeDeltas([5, 3, 6, 7, 2], 2, 4);
console.log(output_1); // --> 7

const output_2 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 1);
console.log(output_2); // --> 2

const output_3 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 4);
console.log(output_3); // --> 15

const output_4 = sumAltitudeDeltas([4, 1, 4, 0, 20, 13], 1, 4);
console.log(output_4); // --> 50
