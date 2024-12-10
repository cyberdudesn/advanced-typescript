// T extends Array<infer ArrayType> checks if T extends an Array.
// Furthermore, we use the infer keyword to get a hold of the array type.
// Think of it as storing the type in a variable.

type flattenArrayType<T> = T extends Array<infer ArrayType> ? ArrayType : T;

type foo = flattenArrayType<string[]>;
// equal to type foo = string;

type foo1 = flattenArrayType<number[]>;
// equal to type foo = number;

type foo2 = flattenArrayType<number>;
// equal to type foo = number;
