{
  // generic type
  type GenericArray<T> = Array<T>;

  //   const rollNumber: number[] = [4, 5, 6];
  const rollNumber: GenericArray<number> = [4, 5, 6];

  //   const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  //   const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    { name: "Nasim", age: 25 },
    { name: "Reza", age: 35 },
  ];

  type User = { name: string; age: number };
  const user2: GenericArray<User> = [
    { name: "Nasim", age: 25 },
    { name: "Reza", age: 35 },
  ];

  type GenericTuple<X, Y> = [X, Y];
  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];
  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    123,
    { name: "Nasim", email: "b@gmail.com" },
  ];
  //
}
