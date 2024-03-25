"use strict";
// Question 37
function t_shirt(size = `small`, message = `Don't stare`) {
    console.log(`Making a ${size} shirt with ${message} as a message written on it`);
}
t_shirt();
t_shirt(`medium`);
t_shirt(`large`, `I love Pakistan`);
// Question 38
function cities(city, country = `Pakistan`) {
    console.log(`${city} is the capital of ${country}`);
}
cities(`Karachi`);
cities(`Tokyo`, `japan`);
cities(`Washington DC`, `United States`);
// Question 39
function formatting_cities(city, country) {
    return `${city} ${country}`;
}
;
console.log(formatting_cities(`Karachi`, `Pakistan`));
console.log(formatting_cities(`Washington DC`, `USA`));
console.log(formatting_cities(`London`, `United Kingdom`));
