{
  //2-10 Union and Intersection types

  //Union types
  type FrontEndDeveloper = "fakiBasDev" | "juniorDev"; // string literal types
  type BackEndDeveloper = "fakiBasDev" | "juniorDev"; // string literal types
  const newDeveloper: FrontEndDeveloper = "juniorDev";

  type FullStackDeveloper = FrontEndDeveloper | BackEndDeveloper; // string literal types

  type User = {
    name: string;
    email: string;
    gender: "male" | "female";
    bloodGroup: "A+" | "B+" | "O+";
  };

  const user1: User = {
    name: "Nasim",
    email: "nasimitjesbd@gmail.com",
    gender: "male",
    bloodGroup: "O+",
  };

  type FrontEndDeveloper2 = {
    skills: string[];
    designation1: "FrontEnd Developer";
  };
  type BackEndDeveloper2 = {
    skills: string[];
    designation2: "BackEnd Developer";
  };

  type FullStackDeveloper2 = FrontEndDeveloper2 & BackEndDeveloper2;

  const fullStackDeveloper2: FullStackDeveloper2 = {
    skills: ["html", "css", "express"],
    designation1: "FrontEnd Developer",
    designation2: "BackEnd Developer",
  };
}
