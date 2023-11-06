{
  // Inheritance in OOP

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleet for ${numOfHours}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  const student1 = new Student("Mr. Student", 20, "Uganda");

  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    getTeaching(numOfHours: number) {
      console.log(`Mr. ${this.name} is teaching ${numOfHours} every day`);
    }
  }

  const teacher1 = new Teacher("Kamal", 45, "Uganda", "Professor");

  //
}
