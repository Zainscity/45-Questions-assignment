"use strict";
// Question 31
let usernames = [];
if (usernames.length === 0) {
    console.log("The list is empty");
}
else
    console.log(`Hello ${usernames}, you have successfully signed in`);
// Question 32
let current_users = ["Zain", "Ali", "Talha"];
let new_users = ["Zaid", "Zain", "Nasir", "Ameen"];
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} (This user already exists in the list)`);
    }
    else {
        console.log(`${newUser} (This user must be added to the list)`);
    }
});
// Question 33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((number) => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});
