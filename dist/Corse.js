"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 20;
if (age < 25)
    age += 10;
console.log(age);
//Types
let sales = 123456789;
let cousre = "TSx";
let isPublished = true;
let level;
level = 1;
level = "a";
function render(document) {
    console.log(document);
}
//Arrays
let words = ["1", "2", "3"];
let numbers = [1, 2, 3];
let bools = [true, false, true];
let arr = [1, true, "a"];
let Numbers = [1, 2, 3];
//Tuples
let user = [1, "a"];
//Enums
// const small = 1;
// const medium = 2;
// const large = 3;
//PascalCase
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
//Functions
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.4;
}
calculateTax(10000);
// Type Alias
let employee = {
    id: 1, name: "Mosh", retire: (date) => {
        console.log(date);
    }
};
//Union Types
function kgToLbs(weight) {
    //Narrowing
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10kg");
console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));
//# sourceMappingURL=Corse.js.map