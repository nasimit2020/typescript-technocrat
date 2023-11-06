// Function 2 types
// 1. normal function, 2. arrow function

// 1. Normal Function

function myFunc(num1: number, num2: number): number {
  return num1 + num2;
}

myFunc(2, 4);

// 2. Arrow Function

const myFunc2 = (num1: number, num2: number): number => num1 + num2;

// Object --> function --> method

const poorUser = {
  name: "Nasim",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is: ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 2, 10];

const newArray: number[] = arr.map((ele: number): number => ele * ele);
