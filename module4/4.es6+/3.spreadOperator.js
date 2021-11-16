function greet(name, greeting) {
  return `${greeting}! My name is ${name}.`;
}

function greetNisha() {
  const personAndGreeting = ['Nisha', 'Hi there'];
  return greet(...personAndGreeting); // this is the line to change
}

console.log(greetNisha());
