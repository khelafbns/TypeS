let age: number = 20;
if(age<25)
    age+=10;
console.log(age);
//Types

let sales: number = 123_456_789;
let cousre: string = "TSx";
let isPublished: boolean = true;

let  level:any;
level = 1;
level = "a";

function render(document:any){
    console.log(document)
}

//Arrays
let  words : string[] = ["1","2","3"];
let  numbers : number[] = [1,2,3];
let  bools : boolean[] = [true,false,true];
let  arr : any[] = [1,true,"a"];
let Numbers :Array<number> = [1,2,3];