"use strict";
// Question 34
let pizza = ["Veggie", "cheese", "pepperoni"];
pizza.forEach((pizza) => {
    console.log(`I like`, pizza, `pizza so much`);
});
// Question 35
let animals = ["Cow", "Kitten", "Goats"];
animals.forEach((animals) => {
    console.log(`I like`, animals);
});
// Question 36
function t_shirt(sizes, message) {
    console.log(`Make a T-shirt of size ${sizes} with this message written on it ${message}`);
}
t_shirt(`"large"`, `"Smile please"`);