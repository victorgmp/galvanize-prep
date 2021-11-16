function constructPerson(name = 'Anonymous', age = 0, hobbies = []) {
  const person = {
    name,
    age,
    hobbies,
  };

  return person;
}

console.log(constructPerson('Víctor', 37, ['run', 'swin']));
