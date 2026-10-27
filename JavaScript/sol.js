/*
  JavaScript Class Test - Simple Answers
  Easy explanations + short JS examples
*/

// =========================================================
// Section A: Multiple Choice Questions
// =========================================================

// Q1. What will be the output?
// Correct answer: B. object, number, object
// Explanation: typeof null is a JavaScript bug/quirk, typeof NaN is number,
// and typeof [] is object.
console.log(typeof null);    // object
console.log(typeof NaN);     // number
console.log(typeof []);      // object

// Q2. Predict the output.
// Actual output: "2203", 200, NaN
// The provided option list does not exactly match this result.
console.log(2 + "203");      // "2203"  -> string + number = string
console.log(403 - "203");    // 200      -> minus converts string to number
console.log(2 * "12abc");    // NaN      -> not a valid number

// Q3. Which statement about let, const, var is correct?
// Correct answer: D
// Explanation: let and const are block-scoped, var is function-scoped.
// const does not allow reassigning the variable, but object properties can still change.

// Q4. What is the output?
// Correct answer: B. Pass, followed by a ReferenceError
let score = 12;
if (score > 10) {
  var result = "Pass";
  let status = "Eligible";
}
console.log(result);   // Pass
// console.log(status); // ReferenceError: status is not defined

// Q5. Which loop is most suitable for iterating over array values?
// Correct answer: B. for...of
const fruits = ["Apple", "Banana", "Mango"];
for (const fruit of fruits) {
  console.log(fruit);
}

// Q6. What is the main difference between return and console.log() inside a function?
// Correct answer: C
// return sends value back to caller, console.log just prints it.
function add(a, b) {
  return a + b;  // value returned to caller
}
console.log(add(2, 3)); // 5

// Q7. What does the rest parameter do?
// Correct answer: B. Collects the arguments into an array.
function calculateTotal(...prices) {
  return prices.length;
}
console.log(calculateTotal(10, 20, 30)); // 3

// Q8. Which statement about arrow functions and "this" is correct?
// Correct answer: C
// Arrow functions inherit this from the surrounding lexical scope.
const person = {
  name: "Aman",
  printName: () => {
    console.log(this.name); // usually undefined in regular JS modules / global scope
  }
};
person.printName();

// =========================================================
// Section B: Predict the Output
// =========================================================

// Q9. Operators and type coercion
console.log("5" + 2);      // "52"  -> string concatenation
console.log("5" - 2);      // 3     -> minus converts string to number
console.log(true + 2);      // 3     -> true = 1
console.log(Boolean("false")); // true -> non-empty string is truthy

// Q10. Scope and variable declarations
var amount = 100;
function calculate() {
  var amount = 200;
  let discount = 20;

  if (true) {
    var amount = 300;      // same function-scoped variable
    let discount = 50;    // block-scoped variable
    console.log(amount, discount); // 300 50
  }

  // console.log(amount, discount); // ReferenceError: discount is not defined
}
calculate();
console.log(amount); // 100

// Important idea:
// var is function-scoped, so it is shared inside the whole function.
// let is block-scoped, so it works only inside the if block.

// Q11. Functions and return values
function calculatePrice(price, quantity) {
  console.log(price * quantity); // 300 will print here
  // no return statement
}
const resultFromFunction = calculatePrice(100, 3);
console.log(resultFromFunction); // undefined

// Correct version:
function correctCalculatePrice(price, quantity) {
  return price * quantity;
}
const finalResult = correctCalculatePrice(100, 3);
console.log(finalResult); // 300

// Q12. Array mutation
const products = ["Milk", "Bread", "Rice"];
products[1] = "Eggs";
products.push("Oil");
console.log(products);      // [ 'Milk', 'Eggs', 'Rice', 'Oil' ]
console.log(products.length); // 4

// const only stops reassignment of the variable itself.
// It does NOT stop changing the content inside the array.

// Q13. Object methods and this
const employee = {
  name: "Aman",
  salary: 30000,
  showDetails() {
    console.log(this.name, this.salary); // Aman 30000
  }
};
employee.showDetails();

// Here this refers to employee, because we call: employee.showDetails()

// Q14. Rest parameters and spread syntax
function addNumbers(...numbers) {
  return numbers.length;
}
const values = [10, 20, 30, 40];
console.log(addNumbers(values));    // 1 -> one array passed as one argument
console.log(addNumbers(...values)); // 4 -> array spread into 4 separate numbers

// Q15. Fix the variable scope issue
// Original code:
// if (true) {
//   let message = "Order placed successfully";
// }
// console.log(message);

// Error: ReferenceError
// Reason: message is block-scoped and only exists inside the if block.

let message;
if (true) {
  message = "Order placed successfully";
}
console.log(message); // Order placed successfully

// Q16. Fix the shopping cart calculation
function calculateCartTotal(...prices) {
  let total = 0;
  for (let i = 0; i <= prices.length; i++) {
    total += prices[i];
  }
  return total;
}
console.log(calculateCartTotal(100, 200, 300));
// This gives NaN because i becomes equal to prices.length at the end.
// prices[3] is undefined, and total += undefined => NaN.

// Correct version:
function correctCartTotal(...prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }
  return total;
}
console.log(correctCartTotal(100, 200, 300)); // 600

// Q17. Fix the object method
const user = {
  userName: "Rahul",
  showName: () => {
    console.log(this.userName); // this is not the object here
  }
};
user.showName();

// Better method:
const properUser = {
  userName: "Rahul",
  showName() {
    console.log(this.userName); // Rahul
  }
};
properUser.showName();

// Arrow functions are good for callbacks or short functions where
// we want to keep the outer this value.

// Q18. Type coercion - Predict the output
console.log([] + []);       // ""
console.log([] + {});       // "[object Object]"
console.log("5" - -"2"); // 7
console.log(null + 1);      // 1

// Explanation:
// [] becomes "" when used in string context.
// {} becomes "[object Object]".
// "5" - -"2" is the same as 5 - (-2) = 7.
// null converts to 0 in numeric context.

// Q19. Scope and hoisting
console.log(a);  // undefined
var a = 10;

try {
  console.log(b);  // ReferenceError
} catch (err) {
  console.log(err.name + ": " + err.message);
}
let b = 20;

// Explanation:
// var is hoisted and initialized to undefined.
// let is also hoisted, but it is in the Temporal Dead Zone (TDZ)
// until the declaration line is reached.

// =========================================================
// JavaScript Interview-Level Questions
// =========================================================

// 1) What is the difference between == and === ?
// == compares after type conversion (loose equality)
// === compares without conversion (strict equality)
console.log(5 == "5");  // true
console.log(5 === "5"); // false

// 2) What is the difference between undefined and null ?
// undefined means a variable is declared but no value assigned.
// null means the value is intentionally empty.
let x;
console.log(x); // undefined
const y = null;
console.log(y); // null

// 3) What is the difference between for...in and for...of ?
// for...in loops through keys/indexes
// for...of loops through values
const names = ["A", "B", "C"];
for (const index in names) {
  console.log(index); // 0, 1, 2
}
for (const name of names) {
  console.log(name); // A, B, C
}

// 4) Can a function return another function? Give a real-world use case.
// Yes. This is called higher-order function.
function greetMessage(prefix) {
  return function (name) {
    return prefix + " " + name;
  };
}
const welcome = greetMessage("Hello");
console.log(welcome("Rahul")); // Hello Rahul

// Real-world use case: creating special functions like discount calculators or event handlers.

// 5) What happens if a function has no explicit return statement?
// It returns undefined.
function demo() {
  console.log("No return here");
}
console.log(demo()); // undefined

// 6) What is the difference between passing a primitive value and passing an object to a function?
// Primitive value is passed by value.
// Object is passed by reference.
let num = 10;
function changeNum(value) {
  value = 20;
}
changeNum(num);
console.log(num); // 10

const obj = { a: 1 };
function changeObj(value) {
  value.a = 2;
}
changeObj(obj);
console.log(obj.a); // 2

// 7) What is the difference between shallow copying and deep copying an object?
// Shallow copy copies top-level properties only.
// Deep copy copies nested objects too.
const userObj = {
  name: "Aman",
  address: {
    city: "Delhi"
  }
};

const shallowCopy = { ...userObj };
const deepCopy = JSON.parse(JSON.stringify(userObj));

shallowCopy.address.city = "Mumbai";
console.log(userObj.address.city); // Mumbai
console.log(deepCopy.address.city); // Delhi

// 8) Why is NaN !== NaN true?
// Because NaN means "Not a Number" and it is a special value.
// JavaScript says NaN is not equal to itself.
console.log(NaN === NaN); // false
console.log(NaN !== NaN); // true

// 9) What is the difference between function declarations and function expressions regarding hoisting?
// Function declarations are hoisted fully.
// Function expressions are not hoisted like normal declarations.
hello(); // works
function hello() {
  console.log("Hello from function declaration");
}

// const sayHi = function () {
//   console.log("Hello");
// };
// sayHi(); // works only after initialization

// 10) When would you use an arrow function instead of a regular function?
// Use arrow functions for short callbacks and when you want lexical this.
const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2);
console.log(doubled); // [2, 4, 6]

// Final note:
// JavaScript is easy when we understand:
// 1) scope
// 2) hoisting
// 3) type conversion
// 4) this keyword
// 5) arrays and objects

console.log("All JavaScript questions are answered in a simple way.");
