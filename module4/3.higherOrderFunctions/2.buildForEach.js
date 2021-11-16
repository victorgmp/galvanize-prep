function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }

  return arr;
}

forEach(['one', 'two', 'three'], (val, index, arr) => {
  console.log(val, index, arr);
});
