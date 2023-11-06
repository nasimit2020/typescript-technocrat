{
  //ternary operator || optional chaining || nullish coalescing

  const age: number = 19;

  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }

  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  console.log({ isAdult });

  //nullish coalescing operator (if value return null or undefined, then set a default value)
  // null / undefined ---> if decision making

  const isAuthenticated = null;
  // const isAuthenticated = "";

  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Nasim",
    address: {
      city: "Jashore",
      road: "Panchbaria",
      presentAddress: "120/5 Doctor Bari",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress });

  //
}
