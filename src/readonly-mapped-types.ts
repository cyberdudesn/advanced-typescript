interface Car {
  model: string;
  engineCC: number;
}

const yaris: Car = {
  model: 'Toyota Yaris',
  engineCC: 1200,
};

// 'Readonly' mapped type definition for 'Car' interface
type ReadOnlyType<T> = {
  readonly [P in keyof T]: T[P];
};

// or simply 'freeze<T>(obj: T): Readonly<T>'
function freeze<T>(obj: T): ReadOnlyType<T> {
  return Object.freeze(obj);
}

const newYaris = freeze(yaris);
// Not allowed because properties of 'newYaris' is readonly
// newYaris.engineCC = 1500;
