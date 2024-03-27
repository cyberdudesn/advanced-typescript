interface Pizza {
  type: string;
  [key: number]: string;
}

let pizza: Pizza = {
  type: 'peperonni',
};
pizza[1] = 'test';

console.log('pizza', pizza);
// Output: pizza { '1': 'test', type: 'peperonni' }
