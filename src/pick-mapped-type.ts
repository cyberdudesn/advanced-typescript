interface Book {
  name: string;
  price: number;
  author: {
    name: string;
  };
}

// Similar to type definition of 'Pick' built-in mapped type
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Or simply:
// const book: Pick<Book, 'name' | 'price'>
const book: MyPick<Book, 'name' | 'price'> = {
  name: 'Jason',
  price: 4,
};
