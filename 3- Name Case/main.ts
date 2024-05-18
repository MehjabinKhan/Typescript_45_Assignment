//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// Lowercase

let personName = "Mehjabin Khan";
console.log(personName.toLowerCase());

// Uppercase

let personName2 = "mehjabin khan";
console.log(personName2.toUpperCase());

// Titlecase

let personName3 = "mehjabin khan";
let firstName = (personName3.charAt(0).toUpperCase()+personName3.slice(1,8)); 
let lastName = (personName3.charAt(9).toUpperCase()+personName3.slice(10,13));
let Titlecase = firstName + ' ' + lastName ;
console.log(Titlecase);



