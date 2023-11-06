"use strict";
{
    //spread operator
    // rest operator
    // learn spread operator
    const bros1 = ["Mir", "Firoz", "Mizan"];
    const bros2 = ["Tonmoy", "Nahid", "Rahat"];
    bros1.push(...bros2); // spread operation mins 3 dots.
    const mentor1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
    };
    const mentor2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "nahid",
    };
    const mentorList = Object.assign(Object.assign({}, mentor1), mentor2);
    //learn rest operator
    const greetFriends = (...friends) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("Abul", "Kabul", "Jamal", "Khalaque");
}
