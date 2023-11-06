{
  // destructuring
  const user = {
    id: 345,
    name: {
      firstName: "Mezbaul",
      middleName: "Abedin",
      lastName: "Persian",
    },
    contactNo: "01925370837",
    address: "Uganda",
  };

  const {
    contactNo,
    name: { middleName: namAlias },
  } = user;

  //Array destructuring
  const myFriends = ["Robin", "Sumon", "Badol", "Bozlur", "Khaleq", "Bulbul"];

  const [, , bestFriend, ...rest] = myFriends;
}
