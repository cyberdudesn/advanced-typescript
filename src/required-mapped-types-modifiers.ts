//////////////////////////////
// Required Mapped types and +/- modifiers
//////////////////////////////
interface Student {
  name: string;
  age?: number;
}

// Adds 'required' and removes '?/optional' modifier
type ReadonlyRequired<T> = {
  +readonly [P in keyof T]-?: T[P];
};

// Or simply
// function printAgeOfStudent(student: Readonly<Required<<Student>>)
function printAgeOfStudent(student: ReadonlyRequired<Student>) {
  console.log(`${student.name} is ${student.age} years old.`);
}

const rick: ReadonlyRequired<Student> = {
  name: 'Rick',
  age: 14,
};

// Not allowed
// rick.age = 23;

const morty: Student = {
  name: 'Morty',
};

printAgeOfStudent(rick);

// Not allowed
// printAgeOfStudent(morty);
