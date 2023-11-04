{
  //utility types

  //Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Name = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;

  // Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  //Required
  type PersonRequired = Required<Person>;

  //Partial
  type PersonPartial = Partial<Person>;

  type PersonReadonly = Readonly<Person>;
  // Readonly
  const person1: PersonReadonly = {
    name: "Md. Nasim Reza",
    age: 35,
    contactNo: "01925370837",
  };

  //   person1.name = "Kader"

  // Record type
  type MyObj = {
    a: string;
    b: string;
  };
  const obj1: MyObj = {
    a: "aa",
    b: "bb",
  };

  //Record type dynamic
  type MyObj2 = Record<string, string>;
  const obj2: MyObj2 = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
  };

  const EmptyObj: Record<string, unknown> = {}; //for empty object
  //
}
