// function verifyPayment(transactionId) {

//     if (transactionId === undefined) {
//         console.log("Payment verification failed")
//         return ;
//     }
//     //difference b/w null and undefined : 
//     // null is an assignment value that represents no value
//     // undefined is a variable that has been declared but not assigned a value

//     console.log("transactions id", transactionId)
//     console.log("Payment verified successfully")

//     return transactionId //if not then it returns undefined
    
// }

// console.log((verifyPayment(123456789)))

// function addExpenses(...exp){
//     console.log("exp" , exp)
//     const totalExpenses=

//     console.log("Your total expenses are:")
// }

// addExpenses(100, 200, 300, 400, 500)

// //difference b/w arrow function and normal function :
// // 1. Arrow functions do not have their own 'this' context, they inherit it from the parent scope, while normal functions have their own 'this' context.
// // 2. Arrow functions cannot be used as constructors and cannot be called with the 'new' keyword, while normal functions can be used as constructors.
// // 3. Arrow functions do not have the 'arguments' object, while normal functions do.
// // 4. Arrow functions are always anonymous, while normal functions can be named or anonymous. 

// //arrow function syntax :
// const functionName = (parameters) => {
//     // function bod
// } 

// const person1 = {
//     show:showDetails=() => {
//         console.log("this",this)
//         console.log("this is user:",this.username+" and age is:",this.age)
//     }
//     }

const sumOfNumbers=numbers.reduce((acc,num)=>acc+num,0)
console.log(sumOfNumbers) 

const products=[
    {name:"Silk" , price:999, inStock:true},
    {name:"Butter", price:99, inStock:false},
    {name:"Ice", price:9, inStock: true},
    {name:"Pizza", price:69, inStock: false}
];