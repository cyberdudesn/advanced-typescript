interface Person1 {
  id: string;
  name: string;
  age: number;
}

type Getter<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property];
};

type Person1Getter = Getter<Person1>;
// type Person1Getter = {
//     getId: () => string;
//     getName: () => string;
//     getAge: () => number;
// }
