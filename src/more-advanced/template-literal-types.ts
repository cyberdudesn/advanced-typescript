type World = 'world';
type Greeting<T extends string> = `hello ${T}`;

type HelloWorld = Greeting<World>;
// 'hello world'

type UppercaseHelloWorld = Uppercase<HelloWorld>;
// 'HELLO WORLD'

type LowercaseHelloWorld = Lowercase<HelloWorld>;
// 'hello world'

type CapitalizeHelloWorld = Capitalize<HelloWorld>;
// 'Hello world'
