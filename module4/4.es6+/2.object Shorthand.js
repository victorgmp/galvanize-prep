function constructPerson(name = 'Anonymous', age = 0, hobbies = []) {
  return {
    name,
    age,
    hobbies,
  };
}

console.log(constructPerson());
