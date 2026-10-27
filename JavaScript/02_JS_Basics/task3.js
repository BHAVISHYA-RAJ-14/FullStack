// Task : Shopping Cart and Variable Arguments
// Concepts: Objects, arrays inside objects, rest parameters, loops, functions

// -----------------------------------------------------------
// 1. Create the shoppingCart object with customer name and items
// -----------------------------------------------------------
// Each item is an object with name, price, and quantity properties
const shoppingCart = {
    customerName: "BHAVISHYA ",
    items: [
        { name: "Milk", price: 30, quantity: 2 },
        { name: "Bread", price: 40, quantity: 1 },
        { name: "Eggs", price: 90, quantity: 2 },
        { name: "Rice", price: 250, quantity: 1 }
    ]
};

// -----------------------------------------------------------
// 2. calculateCartTotal(...prices)
//    Accepts any number of prices (rest parameters) and returns their sum
// -----------------------------------------------------------
// The ...prices rest parameter gathers any number of arguments into an array.
function calculateCartTotal(...prices) {
    let total = 0;

    // Add each price to the running total.
    for (const price of prices) {
        total += price;
    }

    return total;
}

// -----------------------------------------------------------
// 3. calculateItemTotal(item)
//    Calculates the total cost of a single item (price * quantity)
// -----------------------------------------------------------
function calculateItemTotal(item) {
    // Multiply the item's price by its quantity
    return item.price * item.quantity;
}

// -----------------------------------------------------------
// 4. calculateCartBill(cart)
//    Calculates the complete bill: subtotal, discount, and final amount
// -----------------------------------------------------------
// Add every item's total, then calculate any discount and the final amount.
function calculateCartBill(cart) {
    const itemTotals = [];

    // Save each line total so we can pass all of them to calculateCartTotal.
    for (const item of cart.items) {
        itemTotals.push(calculateItemTotal(item));
    }

    const subtotal = calculateCartTotal(...itemTotals);
    const discount = subtotal > 2000 ? subtotal * 0.10 : 0;

    return {
        subtotal: subtotal,
        discount: discount,
        finalAmount: subtotal - discount
    };
}

// -----------------------------------------------------------
// 5. displayCheckoutSummary(cart)
//    Displays the full checkout summary to the console
// -----------------------------------------------------------
function displayCheckoutSummary(cart) {
    // Show the customer's name
    console.log("Customer: " + cart.customerName);
    console.log(""); // blank line for readability

    // Calculate the bill once so we can use the values
    const bill = calculateCartBill(cart);

    // Loop through each item and display its details
    for (let i = 0; i < cart.items.length; i++) {
        const item = cart.items[i];
        const itemTotal = calculateItemTotal(item);

        // Display: name, quantity (x), and item total in rupees
        console.log(item.name + "       x " + item.quantity + "    ₹" + itemTotal);
    }

    console.log(""); // blank line before totals

    // Display the subtotal
    console.log("Subtotal:           ₹" + bill.subtotal);

    // Display the discount (0 if none applied)
    console.log("Discount:           ₹" + bill.discount);

    // Display the final payable amount
    console.log("Final Amount:       ₹" + bill.finalAmount);
}

// -----------------------------------------------------------
// 6. TEST CASES
// -----------------------------------------------------------

// Test 1: Empty cart (no items)
console.log("=== TEST 1: Empty Cart ===");
const emptyCart = {
    customerName: "Rahul",
    items: []
};
displayCheckoutSummary(emptyCart);
console.log(""); // blank line between tests

// Test 2: Single item
console.log("=== TEST 2: Single Item ===");
const singleItemCart = {
    customerName: "Rahul",
    items: [
        { name: "Milk", price: 30, quantity: 2 }
    ]
};
displayCheckoutSummary(singleItemCart);
console.log(""); // blank line between tests

// Test 3: Multiple items (original shopping cart)
console.log("=== TEST 3: Multiple Items ===");
displayCheckoutSummary(shoppingCart);

// -----------------------------------------------------------
// 7. Test calculateCartTotal with variable arguments
// -----------------------------------------------------------
console.log("\n=== TEST 4: calculateCartTotal function ===");
console.log("Sum of 10, 20, 30: ₹" + calculateCartTotal(10, 20, 30));
console.log("Sum of 5, 5, 5, 5: ₹" + calculateCartTotal(5, 5, 5, 5));
console.log("Sum of single value 100: ₹" + calculateCartTotal(100));
console.log("Sum of no values: ₹" + calculateCartTotal());

// This cart is over ₹2,000, so its checkout should include a 10% discount.
console.log("\n=== TEST 5: Discount ===");
const discountCart = {
    customerName: "Maya",
    items: [
        { name: "Headphones", price: 1500, quantity: 1 },
        { name: "Keyboard", price: 800, quantity: 1 }
    ]
};
displayCheckoutSummary(discountCart);

// Interview answers:
// 1. Ordinary parameters each receive one named argument. A rest parameter
//    gathers any remaining arguments into an array.
// 2. JavaScript allows extra arguments. Ordinary parameters do not collect them,
//    but a rest parameter can gather them so the function can use them.
// 3. ...prices in a function definition gathers arguments into an array. The
//    spread syntax in calculateCartTotal(...itemTotals) sends array values as separate arguments.