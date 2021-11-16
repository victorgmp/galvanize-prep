const customerData = {
  Joe: {
    visits: 1,
  },
  Carol: {
    visits: 2,
  },
  Howard: {
    visits: 3,
  },
  Carrie: {
    visits: 4,
  },
};

function greetCustomer(firstName) {
  const customer = customerData[firstName];
  const visits = customer ? customer.visits : 0;

  if (visits === 0) {
    return 'Welcome! Is this your first time?';
  }

  if (visits === 1) {
    return `Welcome back, ${firstName}! We're glad you liked us the first time!`;
  } if (visits > 1) {
    return `Welcome back, ${firstName}! So glad to see you again!`;
  }
}

console.log(greetCustomer('Joe'));
