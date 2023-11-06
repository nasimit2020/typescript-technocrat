"use strict";
var _a, _b;
{
    //ternary operator || optional chaining || nullish coalescing
    const age = 19;
    if (age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("Not Adult");
    }
    const isAdult = age >= 18 ? "Adult" : "Not Adult";
    console.log({ isAdult });
    //nullish coalescing operator (if value return null or undefined, then set a default value)
    // null / undefined ---> if decision making
    const isAuthenticated = "";
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result1 }, { result2 });
    const user = {
        name: "Nasim",
        address: {
            city: "Jashore",
            road: "Panchbaria",
            presentAddress: "120/5 Doctor Bari",
        },
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Address";
    console.log({ permanentAddress });
    //
}
