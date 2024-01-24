// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives 

let age: number;

age = 12;

let userName: string | string[];

userName = 'Vishal';

let isCompeted: boolean;

isCompeted = true;

// More complex types

let hobbies: string[];

hobbies = ['traveling', 'riding'];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Vishal',
  age: 26,
};

let people: Person[];

// Type inference

let course: string | number = 'React 2024';

course = 12341;

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertValueAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertValueAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertValueAtBeginning(['a', 'b', 'c'], 'd')