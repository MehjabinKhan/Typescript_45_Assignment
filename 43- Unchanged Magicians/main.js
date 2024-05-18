"use strict";
//  Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magician_names = ["Harry Houdini", "Criss Angel", "Ricky Jay"];
// make a copy of original array
let copy_magician_names = magician_names.slice();
// modify the copied array to add "The Great" with names
let copy_great_magician = make_great(copy_magician_names);
// Print original array
show_magicians(magician_names);
// Print copy array
show_magicians(copy_great_magician);
