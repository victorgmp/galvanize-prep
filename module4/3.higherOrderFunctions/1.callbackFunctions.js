function cbFunction(x, y, z) {
  return x + y + z;
}

function caller(x, y, z, cb) {
  console.log('In caller function!');
  // your code here
  return cb(x, y, z);
}

const x = caller(1, 2, 3, cbFunction);

console.log(x);
