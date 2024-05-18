// You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// Tests for equality and inequality with strings
let mango = "mango";
console.log("Is mango is equal to mango?");
console.log(mango == "mango");

console.log("Is mango is not equal to mango?");
console.log(mango != "mango");

// Tests using the lower case function
let uppercaseMango = "MANGO";
console.log("Is MANGO is equal to mango after converting to lowercase?");
console.log(uppercaseMango.toLowerCase() == "mango");

console.log("Is MANGO is not equal to mango after converting to lowercase?");
console.log(uppercaseMango.toLowerCase() != "mango");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let ten = 10;
let twenty = 20;
// equal to
console.log("Is ten is equal to twenty?");
console.log(ten == twenty);

// not equal to
console.log("Is ten is not equal to twenty?");
console.log(ten != twenty);

// greater than
console.log("Is ten is greater than zero?");
console.log(ten > 0);

// less than
console.log("Is twenty is less than 10");
console.log(twenty < 10);

// greater than or equal to
console.log("Is ten is greater than or equal to 6?");
console.log(ten >= 6);

// less than or equal to
console.log("Is twenty is less than or equal to 17?");
console.log(twenty <= 17);

//  Tests using "and" and "or" operators
  //    && (and)
console.log("twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("twenty is not equal to 10 and twenty is greater than 40");
console.log(twenty != 10 && twenty > 40);

 //    || (or)
console.log("20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("20 is greater than 50 or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

//  Test whether an item is in a array
let fruits = ["apple","mango","banana"];
console.log("Is banana include in fruits array");
console.log(fruits.includes("banana"));

//  Test whether an item is not in a array
console.log("Is banana not include in fruits array");
console.log(!fruits.includes("banana"));
