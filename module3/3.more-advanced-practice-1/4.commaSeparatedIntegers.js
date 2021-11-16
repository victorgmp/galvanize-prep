const solution = (integers) => {
  if (integers.length > 0 && integers.length < 3) {
    return integers.join(',');
  }
  // create a result array
  const result = [];
  // create start index binding, equal to 0
  let start = 0;
  // create next index binding, equal to 1
  let next = 1;
  // create start index binding, equal to 2
  let end = 2;

  // iterate over the integers array
  while (start < integers.length) {
    // if the value at the end minus value at the next is 1,
    // and value at next minus value at start is 1
    if (integers[end] - integers[next] === 1
      && integers[next] - integers[start] === 1) {
      // while value at end minus value at next is 1
      while (integers[end] - integers[next] === 1) {
        next = end;
        end += 1;
      }
      // save a slice of input from start to end
      const seq = integers.slice(start, end);
      // create a string format or slice, and add to result
      result.push(`${seq[0]}-${seq[seq.length - 1]}`);
      // start, next, end = end, end+1, end+2
      start = end;
      next = end + 1;
      end += 2;
    } else {
      // we do not have a streak
      // add value at start to result
      result.push(integers[start]);
      // start, next, end = next, end, end +1
      start = next;
      next = end;
      end += 1;
    }
  }

  // return the result array joined on a comma
  return result.join(',');
};

const result1 = solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);

console.log(result1);
