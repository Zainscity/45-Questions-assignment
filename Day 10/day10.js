"use strict";
// Question 28
let age = 35;
if (age < 0) {
    console.log("This human is not born yet");
}
else if (age < 5) {
    console.log("This human is a child");
}
else if (age < 10) {
    console.log("This human is a teenager");
}
else if (age < 20) {
    console.log("This human is an adult");
}
else if (age < 30) {
    console.log("This human is an elder");
}
else if (age > 30) {
    console.log("This human is about to die");
}
else {
    console.log("This human is an elder");
}
//  Question 29
let favFruits = ["apple", "orange", "mango", "watermelon"];
if (favFruits.includes("apple")) {
    console.log("Put apples in the cart");
}
if (favFruits.includes("orange")) {
    console.log("put 30 oranges in the cart");
}
else {
    console.log("No favorite fruits found");
}
// Question 30
let usernames = ["Admin", "Zain", "Talha",];
usernames.forEach(usernames => {
    if (usernames.includes("Admin")) {
        console.log("Hello Admin! How are you?");
    }
    else
        (console.log(`Hello ${usernames}, you have successfully signed in`));
});
