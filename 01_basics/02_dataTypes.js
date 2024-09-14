
// **--------------------------------DATATYPES  -----------------------------**

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3




// Return type of variables in JavaScript ,can see using typeof function
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  OBJECT function 
//        Object  =>  object





// **--------------------------------OPERATIONS -----------------------------**

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

// PREFIX AND POSTFIX OPERATOR:
let x = 3;
const y = x++; //postfix increment
console.log("x: ",x ,"y: ",y);



let a = 3;
const b = ++a;//prefix increment
console.log("a: ",a ,", b: ",b);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion





// **--------------------------------COMPARISONS  -----------------------------**


// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1); STRING CONVERTED INTO NUMBER for comparison


// NOTE : "==" and "> ,< ,>=,<=" yeh dono operator alag trike se work krte hai ,
console.log(null > 0); 
console.log(null == 0); //"==" convert null into NaN
console.log(null >= 0); // ">=" convert null into 0

console.log(undefined == 0); //both "==" and ">=" convert undefined into NaN
console.log(undefined > 0);
console.log(undefined < 0);

// === strict equality operator

console.log("2" === 2);