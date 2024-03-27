const person = {
  name: 'srijesh',
  age: 36,
};

type Person = typeof person;
type PersonKeys = keyof Person; // Output: ['name', 'age']
type PersonTypes = Person[PersonKeys]; // Output: ['string', 'number']

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// only keys of person object or Person type is allowed as key param
// type of 'personName' would be shown as 'string'
const personName = getProperty(person, 'name');
// typeof 'personAge' would be shown as 'number'
const personAge = getProperty(person, 'age');

console.log(personName, personAge);
// Output: srijesh 36
