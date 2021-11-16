function getDomain(url) {
  const [domain] = url.match(/[^(?:http:\/\/|www\.|https:\/\/)]([^\/]+)/img);
  // const domain = (new URL(url)).hostname.replace('www.', '').replace('.co^', '');
  const [result] = domain.split('.');
  return result;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}], expected '${expected}', but got '${actual}'`);
  }
}

const input1 = 'http://github.com/carbonfive/raygun  ';
const output1 = getDomain(input1);
const expected1 = 'github';
assertEqual(output1, expected1, 'return string github');

const input2 = 'http://www.zombie-bites.com  ';
const output2 = getDomain(input2);
const expected2 = 'zombie-bites';
assertEqual(output2, expected2, 'return string zombie-bites');

const input3 = 'https://www.cnet.com  ';
const output3 = getDomain(input3);
const expected3 = 'cnet';
assertEqual(output3, expected3, 'return string cnet');
