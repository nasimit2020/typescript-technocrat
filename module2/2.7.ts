{
  // generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually write

  type Owner2 = keyof Vehicle;

  const person1: Owner = "bike";
  const person2: Owner2 = "ship";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Nasim Reza",
    age: 36,
    address: "Jashore",
  };

  const car = {
    model: "Toyota 100",
    year: 2020,
  };

  //   user.address (return "Nasim Reza")
  // user['age'] (return 36))

  const result1 = getPropertyValue(user, "name");
  const result2 = getPropertyValue(car, "model");

  //
}
