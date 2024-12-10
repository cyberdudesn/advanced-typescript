//////////////////////////////
// Extract
//////////////////////////////
type RoleAttributes =
  | { role: 'admin'; orgId: string }
  | { role: 'user' }
  | { role: 'anonymous' };

type RoleAdmin = Extract<RoleAttributes, { role: 'admin' }>;
// RoleAdmin = { role: 'admin'; orgId: string }

//////////////////////////////
// ReturnType & Parameters
//////////////////////////////
const func = (a: number, b: number, c: boolean) => 123;
type Func = typeof func;
// Func = (a: number, b: number, c: boolean) => number

type ReturnValue = ReturnType<Func>;
// ReturnValue = number

type Params = Parameters<Func>;
// Params = [a: number, b: number, c: boolean]

//////////////////////////////
// NonNullable
//////////////////////////////
type MaybeString = string | null | undefined;
type DefinitelyString = NonNullable<MaybeString>;
// DefinitelyString = string

//////////////////////////////
// Promise & Awaited
//////////////////////////////
type PromiseString = Promise<string>;
type Result = Awaited<PromiseString>;
// Result = string;

const funcReturnObj = async () => {
  return {
    data: 'abc',
  };
};

type FuncResult = Awaited<ReturnType<typeof funcReturnObj>>;
// FuncResult = { data: string }
