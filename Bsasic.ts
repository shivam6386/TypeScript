/* Types in typescript
Typescript is development tool.
TS doesn't exist at run time. TS convert code into Js. Js run the code
TS don't do any type checking at runtime.It do typecking at compile time.
    Below are all primitive types in TS 

    string -> store text
    number -> integers, real
    boolean
    undefined
    null
    bigint 
    symbol

    var <variable_name> : number = <value>; // type annotation or type signature

*/

let id : number = 5;
let firstName = "Shivam"; // TS understands by it self firstName will store  as strings
// firstName = 12; TSC throws error because TS doesn't support dynamic typing .javascript support dynamic typing.If we define variable type as any than it support dynamic typing
var lastName : string = "Tripathi";
// lastName = 13; TSC throws error
console.log(id, firstName);


//  Union of types
let userId : number | string = "26";
userId = 10;

let x : any = 10;
x = "shivam";
x = false;
console.log(x);

/**
 * 
 * arrays
 TS doesn't support heterogenous array.where as javascript support heterogenous.
 In TS if we want TS support heterogenous than we have to give type
 * 
 * let <variable_name> : type[]  = [val1, val2, ....];
 * 
 */

let ids : number[] = [1,2,3,4,5];
let hetero : any[] = [1,2,false,"123", null];

let data : (number | string | boolean)[] = [1, "shivam", true];

console.log(ids, hetero, data);

// arrays in form of typed tuple
let data1 : [number , string , boolean] = [1, "shivam", true]; 


/**
 * 
 * How to define types for objects
 *  - classes -> data members, member functions
 *  - interface -> its a contract
 classes provided implementation of data members whereas interface don't provide.
 Interface in TS provide structure of object
 */

class Car {
    name : string
    constructor(name : string) {
        this.name = name;
    }

    display() {
        console.log(this.name);
    }
};

interface Product {
    name : string;
    price : number;
    brand : string

    display() : void;
}

let p1 : Product = {
    name: "Iphone",
    price: 100000,
    brand: "Apple",
    display: () => {
        console.log("display");
    } 
}

console.log(p1);


function sum(a : number, b? : number) : number {
    return a + (b || 0);
}

console.log(sum(10))
