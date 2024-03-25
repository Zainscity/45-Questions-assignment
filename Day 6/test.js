"use strict";
let places = ["Saudi", "Russia", "France ", "Italy", "Canada"];
console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Reverse alphabetical order:", [...places].sort().reverse());
places.reverse();
console.log("Reversed order:", places);
