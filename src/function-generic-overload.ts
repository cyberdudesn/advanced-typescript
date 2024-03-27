//////////////////////////////
// Function Generics & Overloads
//////////////////////////////

function reverse(str: string): string;
function reverse<T>(arr: T[]): T[];
function reverse<T>(strOrArr: string | T[]): string | T[] {
  if (typeof strOrArr === 'string') {
    return strOrArr.split('').reverse().join('');
  }
  return strOrArr.slice().reverse();
}

reverse('Apple');
reverse(['Apple', 'Banana', 'Mango', 'Orange']);
reverse([1, 2, 3, 4, 5]);
