"use strict";
// Question 16
let guests = ["Ai", "Hammad", "Raza"];
console.log("Found a bigger dinner table!");
guests.unshift("Babar");
const middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Ahmed");
guests.push("Salman");
for (const guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner at my place!`);
}
// Question 17
console.log("Sorry, I can only invite two people for dinner.");
while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
for (const remainingGuest of guests) {
    console.log(`Dear ${remainingGuest}, you're still invited to dinner.`);
}
console.log("Updated guest list:", guests);
// Question 18
let places = ["Saudi", "Russia", "France ", "Italy", "Canada"];
console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Reverse alphabetical order:", [...places].sort().reverse());
places.reverse();
console.log("Reversed order:", places);
