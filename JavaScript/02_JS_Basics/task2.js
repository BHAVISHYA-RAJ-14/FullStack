// TASK:
// Create an object with these properties:
// - customerName, movieName, ticketPrice, and quantity
// - A nested customer object with email and city
// - A seats array containing at least three seat numbers
// - A calculateTotalAmount() method
//
// Complete these steps:
// 1. Print movieName using dot notation.
// 2. Read the customer's city using nested property access.
// 3. Change the ticket price and add a bookingStatus property.
// 4. Print all object keys using Object.keys().
// 5. Destructure movieName and quantity.
// 6. Calculate and print the total booking amount.

// Create a booking object with the required properties.
const booking = {
    customerName: "Alex",
    movieName: "The Adventure",
    ticketPrice: 250,
    quantity: 3,

    // Store customer details inside a nested object.
    customer: {
        email: "alex@example.com",
        city: "Toronto"
    },

    // Store at least three seat numbers in an array.
    seats: ["A1", "A2", "A3"],

    // Calculate the booking total using the current price and quantity.
    calculateTotalAmount() {
        return this.ticketPrice * this.quantity;
    }
};

// 1. Print the movie name using dot notation.
console.log("Movie:", booking.movieName);

// 2. Access and print the city inside the nested customer object.
console.log("Customer city:", booking.customer.city);

// 3. Update the ticket price and add a booking status.
booking.ticketPrice = 300;
booking.bookingStatus = "Confirmed";

// 4. Print all the booking object's property keys.
console.log("Booking keys:", Object.keys(booking));

// 5. Destructure movieName and quantity into separate variables.
const { movieName, quantity } = booking;
console.log("Movie from destructuring:", movieName);
console.log("Quantity from destructuring:", quantity);

// 6. Calculate and print the total booking amount.
const totalBookingAmount = booking.calculateTotalAmount();
console.log("Total booking amount: Rs", totalBookingAmount);