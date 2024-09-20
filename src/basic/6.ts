interface Person {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
}

const mango: Person = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: Person = {
  name: "Poly",
  age: 20,
  email: "poly@example.com",
};
