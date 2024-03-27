interface Employee {
  name: string;
  age: number;
}

// Similar to 'Partial' built-in mapped type in typescript
type CustomPartial<T> = {
  [P in keyof T]?: T[P];
};

// or
// updateEmployee(employee: Employee, partialEmployee: CustomPartial<Employee>)
function updateEmployee(
  employee: Employee,
  partialEmployee: Partial<Employee>
): Employee {
  return {
    ...employee,
    ...partialEmployee,
  };
}

const employee = {
  name: 'Todd',
  age: 25,
};

const updatedEmployee = updateEmployee(employee, { age: 28 });

console.log(employee, updatedEmployee);
// Output: { name: 'Todd', age: 25 } { name: 'Todd', age: 28 }
