// https://dev.to/zirkelc/how-to-return-different-types-from-functions-in-typescript-2a2h
function plus<
  T extends string | number,
  R = T extends string ? string : number,
>(a: T, b: T): R {
  if (typeof a === 'string' || typeof b === 'string') {
    return (a.toString() + b.toString()) as R;
  }

  if (typeof a === 'number' && typeof b === 'number') {
    return (a + b) as R;
  }

  throw new Error('Both parameters must be of same type');
}

const addedNumber = plus(1, 2);
// 3
const addedString = plus('a', 'b');
// 'ab'
// const plusError = plus('a', 1);
// Error: Both parameters must be of same type
