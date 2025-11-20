let age: number = 20;
if (age < 25)
    age += 10;
console.log(age);
//Types

let sales: number = 123_456_789;
let cousre: string = "TSx";
let isPublished: boolean = true;

let level: any;
level = 1;
level = "a";

function render(document: any) {
    console.log(document)
}

//Arrays
let words: string[] = ["1", "2", "3"];
let numbers: number[] = [1, 2, 3];
let bools: boolean[] = [true, false, true];
let arr: any[] = [1, true, "a"];
let Numbers: Array<number> = [1, 2, 3];

//Tuples
let user: [number, string] = [1, "a"];

//Enums
// const small = 1;
// const medium = 2;
// const large = 3;
//PascalCase
enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium;
console.log(mySize);

//Functions
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.4;
}
calculateTax(10_000);

//Objects


type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}
// Type Alias

let employee: Employee = {
    id: 1, name: "Mosh", retire: (date: Date) => {
        console.log(date);
    }
};

//Union Types
function kgToLbs(weight: number | string): number {
    //Narrowing
    if (typeof weight === "number") {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

kgToLbs(10);
kgToLbs("10kg");
console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));

//Intersection Types
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}