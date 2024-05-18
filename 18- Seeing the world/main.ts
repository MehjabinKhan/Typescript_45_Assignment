// Think of at least five places in the world you’d like to visit.

// create array of places & print it in original order
let placesToVisit: string[] = ["Masjid al-Haram","Al-Masjid an-Nabawi","Quba Mosque","Baghdad","Karbala"];
console.log("Original order:", placesToVisit);

// printing in alphabhetical order
console.log("Alphabetical order:", [...placesToVisit].sort());

// show that array is still in original order
console.log("still in original order:", placesToVisit);

//printing in reverse order
console.log("Reverse order:", [...placesToVisit].reverse());

// print original array
console.log("still in original order:", placesToVisit);

// changing original array order
console.log("Original array reverse:", placesToVisit.reverse());

// return back to original order
console.log("Back to original order:", placesToVisit.reverse());

// order changed to alphabetical order 
console.log("Sorted in alphabetical order", placesToVisit.sort());

// original array reverse again
console.log("Original array reverse:", placesToVisit.reverse());

