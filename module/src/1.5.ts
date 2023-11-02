// Reference Type --> Object

let students: {
  readonly company: string; // type -->literal types | access modifiers
  firstName?: string; //optional type
  middleName: string;
  lastName: string;
} = {
  company: "Programming Hero",
  middleName: "Nasim",
  lastName: "Reza",
};

// students.company = "PH"
