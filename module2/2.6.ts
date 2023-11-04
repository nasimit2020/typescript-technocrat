{
  // constraints

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 3,
    name: "Nasim",
    email: "Z@gmail.com",
    emni: "emni",
  });

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 2,
    name: "Mr. X",
    email: "X@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 3,
    name: "Mr. Y",
    email: "Y@gmail.com",
    hasWatch: "Apple Watch",
  });

  //
}
