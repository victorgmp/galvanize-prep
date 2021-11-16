// write both functions from scratch

const generateSampleView = (users) => users
  .reduce((acc, currUser) => {
    const isOdd = currUser.id % 2 === 1;
    const isEven = currUser.id % 2 === 0;

    if (isOdd) {
      return [...acc, `${currUser.email}`];
    }

    if (isEven) {
      const { address } = currUser;
      const addressObj = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
      return [...acc, addressObj];
    }

    return [...acc];
  }, []);

function assertArraysEqual(actual, expected, testName) {
  const sameLength = actual.length === expected.length;
  let sameValues = true;

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      sameValues = false;
      break;
    }
  }

  if (sameValues && sameLength) {
    console.log('passed');
  } else {
    console.log(`failed [${testName}]`);
  }
}

const sampleUsers = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
];

const actual = generateSampleView(sampleUsers);
console.log('actual', actual);
const expected = ['Sincere@april.biz', 'Victor Plains, Suite 879, Wisokyburgh, 90566-7771'];

assertArraysEqual(actual, expected, 'convert input in array of strings');
