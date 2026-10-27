// HOISTING IN JAVASCRIPT
//
// Hoisting is JavaScript's behavior of preparing declarations before the code
// runs. It can make some variables and functions usable before their written
// position in the file.
// Declarations are not physically moved; this is a way to understand how
// JavaScript handles them during program setup.

// 1. FUNCTION DECLARATIONS (GEC: Global Execution Context)
// Function declarations are hoisted with their function body, so they can be
// called before their declaration.
//
// Example:
// greet();
// function greet() {
//     console.log("Hello!");
// }
//
// This works because the function declaration is available before execution.

// 2. VAR DECLARATIONS
// A var declaration is hoisted and initialized with undefined(cuz it's not executed yet in the thread of execution, currently it's only it's memory is allocated, under GEC ).
// Its assignment stays where it is written.
//
// Example:
// console.log(message); // undefined
// var message = "Hi";
// console.log(message); // "Hi"
//
// JavaScript treats this roughly like:
// var message;
// console.log(message);
// message = "Hi";
// console.log(message);
//
// This can lead to confusing bugs, so let and const are usually preferred.

// 3. LET AND CONST DECLARATIONS
// let and const declarations are also hoisted, but they are not initialized
// until execution reaches their declaration.
// Before that point, they are in the Temporal Dead Zone (TDZ).
//
// Example:
// console.log(age); // ReferenceError: age is in the TDZ
// let age = 20;
//
// The same rule applies to const:
// console.log(country); // ReferenceError: country is in the TDZ
// const country = "Canada";
//
// Always declare let and const variables before using them.

// 4. FUNCTION EXPRESSIONS
// A function expression is a function stored in a variable.
// The variable follows the hoisting rules of its declaration keyword.
//
// Example with var:
// sayHi(); // TypeError: sayHi is undefined
// var sayHi = function () {
//     console.log("Hi!");
// };
//
// The var name is hoisted as undefined, but the function assignment happens later.
//
// Example with const:
// sayHello(); // ReferenceError: sayHello is in the TDZ
// const sayHello = function () {
//     console.log("Hello!");
// };
//
// Function expressions should be used only after their assignment.

// 5. ARROW FUNCTIONS
// Arrow functions are also function expressions, so they follow the hoisting
// rules of the variable that stores them.
//
// Example:
// welcome(); // ReferenceError with const
// const welcome = () => {
//     console.log("Welcome!");
// };

// 6. CLASS DECLARATIONS
// Class declarations are hoisted but stay in the TDZ until the class declaration
// is reached. Define a class before using it.
//
// Example:
// const item = new Product(); // ReferenceError: Product is in the TDZ
// class Product {}

// 7. SCOPE AND HOISTING
// Hoisting applies within the scope where a declaration is made.
// A function-scoped var belongs to its containing function (or the global scope).
// let and const are block-scoped, so they belong to the nearest { } block.
//
// Example:
// if (true) {
//     var functionScoped = "I can be used outside this block";
//     let blockScoped = "I can only be used inside this block";
// }
// console.log(functionScoped); // Works
// console.log(blockScoped);    // ReferenceError

// 8. IMPORTANT TIPS
// - Prefer const by default, and use let when a value needs to change.
// - Avoid var in modern JavaScript because its function scope can be surprising.
// - Declare variables before using them, even when hoisting might allow it.
// - Function declarations can be called before their written position, but
//   writing them before use can make code easier to understand.
// - Hoisting does not mean assignments are moved to the top.