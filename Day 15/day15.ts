// Question 43
let magicians: string[] = ["Alice", "David", "Chris"];
function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });}
let greatMagicians = make_great(magicians.slice()); 
console.log("Original magicians:");
show_magicians(magicians);
console.log("Great magicians:");
show_magicians(greatMagicians); 
// Question 44
function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
// Question 45
function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car: any = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
