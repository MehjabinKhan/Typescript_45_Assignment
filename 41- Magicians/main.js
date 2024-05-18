"use strict";
// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
let magicianName = ["Harry Houdini", "Criss Angel", "Ricky Jay"];
show_magicians(magicianName);
