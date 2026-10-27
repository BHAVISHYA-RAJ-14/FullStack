// OBJECTS IN JAVASCRIPT
//
// An object stores related information as properties.
// A property is a name (key) paired with a value.
// Values can be strings, numbers, booleans, arrays, functions, or other objects.
//
// Example:
// const person = {
//     name: "Ava",
//     age: 25,
//     isStudent: false
// };

// 1. CREATING OBJECTS
//
// Object literal syntax is the most common way to create an object:
// const car = {
//     make: "Toyota",
//     model: "Corolla"
// };
//
// An empty object can be created with:
// const emptyObject = {};
//
// Object() can also create an object, but object literals are usually simpler:
// const anotherObject = new Object();

// 2. READING PROPERTIES
//
// Use dot notation when the property name is a valid identifier:
// console.log(person.name);
//
// Use bracket notation when the property name is stored in a variable,
// contains spaces or special characters, or starts with a number:
// console.log(person["age"]);
//
// const propertyName = "name";
// console.log(person[propertyName]);
//
// const user = { "favorite color": "blue" };
// console.log(user["favorite color"]);

// 3. ADDING, CHANGING, AND DELETING PROPERTIES
//
// Assign a value to add a new property or change an existing one:
// person.city = "Toronto";
// person.age = 26;
//
// Use delete to remove a property:
// delete person.isStudent;
//
// Reading a property that does not exist returns undefined:
// console.log(person.email); // undefined

// 4. PROPERTY KEYS AND VALUES
//
// Object keys are strings or Symbols. When another value is used as a key,
// JavaScript usually converts it to a string.
//
// Object.keys(object) returns an array of the object's own enumerable keys.
// Object.values(object) returns an array of their values.
// Object.entries(object) returns an array of [key, value] pairs.
//
// Example:
// Object.keys(person);
// Object.values(person);
// Object.entries(person);

// 5. CHECKING WHETHER A PROPERTY EXISTS
//
// The in operator checks for a property on the object or its prototype chain:
// "name" in person;
//
// Object.hasOwn() checks whether the object itself has the property:
// Object.hasOwn(person, "name");
//
// Checking for undefined is not always enough: a property can exist and
// intentionally have the value undefined.

// 6. METHODS
//
// A function stored as an object property is commonly called a method:
// const user = {
//     name: "Ava",
//     sayHello() {
//         console.log("Hello!");
//     }
// };
//
// Call a method using the object's name and the property:
// user.sayHello();

// 7. THE this KEYWORD
//
// In a method call such as user.sayHello(), this usually refers to the object
// before the dot (user).
//
// const user = {
//     name: "Ava",
//     sayHello() {
//         console.log(`Hello, ${this.name}!`);
//     }
// };
//
// Be careful when taking a method out of its object: the value of this can
// change. Arrow functions do not create their own this, so they are usually
// not used as object methods when the method needs this.

// 8. SHORTHAND PROPERTY NAMES
//
// If a variable name and property name are the same, shorthand syntax can be used:
// const name = "Ava";
// const age = 25;
// const person = { name, age };
//
// This is the same as writing:
// const person = { name: name, age: age };

// 9. COMPUTED PROPERTY NAMES
//
// Square brackets let an expression create a property name:
// const key = "score";
// const result = { [key]: 100 };
//
// The property name becomes "score".

// 10. NESTED OBJECTS AND ARRAYS
//
// Objects can contain other objects and arrays:
// const student = {
//     name: "Ava",
//     address: {
//         city: "Toronto",
//         country: "Canada"
//     },
//     subjects: ["Math", "Science"]
// };
//
// Read nested values by chaining properties:
// student.address.city;
// student.subjects[0];

// 11. OPTIONAL CHAINING
//
// Use ?. to safely access a property that might not exist.
// If the value before ?. is null or undefined, the result is undefined
// instead of an error:
//
// student.contact?.email;
//
// Optional chaining can also be used with methods:
// student.contact?.getEmail?.();

// 12. DESTRUCTURING
//
// Destructuring copies property values into variables:
// const { name, age } = person;
//
// Rename a variable while destructuring:
// const { name: personName } = person;
//
// Set a fallback value for a missing or undefined property:
// const { country = "Unknown" } = person;
//
// Nested destructuring is also possible:
// const { address: { city } } = student;

// 13. COPYING AND SPREAD SYNTAX
//
// The spread syntax creates a shallow copy and can combine objects:
// const copy = { ...person };
// const updatedPerson = { ...person, age: 26 };
//
// Later properties overwrite earlier properties with the same key:
// const settings = { ...defaults, ...userSettings };
//
// A shallow copy does not copy nested objects independently. Nested object
// values are still shared between the original and the copy.
//
// Object.assign() can also copy enumerable properties into a target object:
// const copy = Object.assign({}, person);

// 14. OBJECTS ARE REFERENCE VALUES
//
// Variables holding objects refer to the same object when assigned directly:
// const first = { color: "red" };
// const second = first;
// second.color = "blue";
// first.color is now "blue" too.
//
// Comparing objects checks whether they are the same object, not whether
// their contents look the same:
// ({ value: 1 }) === ({ value: 1 }) // false
//
// To compare object contents, compare the needed properties or use a suitable
// deep-comparison approach.

// 15. LOOPING THROUGH OBJECTS
//
// for...in loops over enumerable string keys, including inherited keys.
// Use Object.hasOwn() if you only want the object's own properties:
//
// for (const key in person) {
//     if (Object.hasOwn(person, key)) {
//         console.log(key, person[key]);
//     }
// }
//
// Object.entries() is useful when looping over own enumerable key-value pairs:
//
// for (const [key, value] of Object.entries(person)) {
//     console.log(key, value);
// }

// 16. PROPERTY DESCRIPTORS
//
// Properties have descriptors that control settings such as whether a property
// can be changed, listed in loops, or removed.
//
// Object.getOwnPropertyDescriptor(object, "propertyName") reads a descriptor.
// Object.defineProperty() can define a property with descriptor options.
//
// Most properties created in an object literal are writable, enumerable,
// and configurable by default.

// 17. FREEZING AND PREVENTING CHANGES
//
// Object.preventExtensions(object) prevents adding new properties.
// Object.seal(object) prevents adding or removing properties, but existing
// writable values can still be changed.
// Object.freeze(object) prevents adding, removing, or changing own properties.
//
// These methods are shallow: nested objects can still be changed unless they
// are frozen separately.

// 18. GETTERS AND SETTERS
//
// Getters and setters define actions that happen when a property is read or set:
//
// const product = {
//     price: 10,
//     get priceWithTax() {
//         return this.price * 1.1;
//     },
//     set price(value) {
//         this._price = value;
//     }
// };
//
// A getter is read like a property. A setter runs when a value is assigned.
// Use them when controlled access or calculated values are useful.

// 19. PROTOTYPES AND INHERITANCE
//
// Objects can inherit properties and methods from another object called
// their prototype. This is JavaScript's prototype-based inheritance.
//
// Object.getPrototypeOf(object) returns an object's prototype.
// Object.create(prototype) creates a new object with the specified prototype.
//
// The in operator can find inherited properties too, while
// Object.hasOwn() only finds properties directly on the object.
//
// Classes provide another syntax for creating objects and sharing methods,
// but JavaScript classes use prototypes behind the scenes.

// 20. JSON AND OBJECTS
//
// JSON is a text format often used to send or store data.
// JSON.stringify(object) converts supported object data to JSON text.
// JSON.parse(text) converts JSON text back into JavaScript data.
//
// JSON does not support every JavaScript value. For example, functions,
// undefined values, and Symbols are not represented normally.
// JSON.stringify() and JSON.parse() are not a complete solution for copying
// every kind of object.

// 21. COMMON TIPS
//
// - Use const for an object variable when you will not reassign the variable.
//   The object's properties can still change unless the object is frozen.
// - Use clear property names and dot notation when it fits.
// - Use bracket notation for dynamic or unusual property names.
// - Remember that object copies made with spread are shallow.
// - Check optional or missing nested values with optional chaining.
// - Use Object.hasOwn() when you need to check for an object's own property.
// - Objects are useful for grouping related data and behavior.