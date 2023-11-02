{
  // Type Alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Nasim",
    age: 50,
    gender: "male",
    contactNo: "01925370837",
    address: "Jashore",
  };

  const student2: Student = {
    name: "Reza",
    age: 48,
    gender: "male",
    address: "Kushtia",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Sabbir";
  const isAdmin: IsAdmin = false;

  type Add = (num1: number, num2: number) => number;

  //   const add = (num1: number, num2: number) => num1 + num2;
  const add: Add = (num1, num2) => num1 + num2;
}
