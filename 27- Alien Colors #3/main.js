"use strict";
// Turn your if-else chain from Exercise 5-4 into an if-else chain.
let alienColor = "green";
if (alienColor === "green") {
    console.log("Alien you have earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("The player just earned 10 points.");
}
else if (alienColor === "red") {
    console.log("The player won 15 points.");
}
// Version 2
let alienColor2 = "black";
if (alienColor2 === "blue") {
    console.log("Alien just earn 20 points.");
}
else if (alienColor2 === "white") {
    console.log("The player just lost the points.");
}
else if (alienColor2 === "black") {
    console.log("Victory!");
}
// Version 3
let alienColor3 = "purple";
if (alienColor3 === "purple") {
    console.log("Alien you just run out of time.");
}
else if (alienColor3 === "pink") {
    console.log("game over");
}
else if (alienColor3 === "brown") {
    console.log("You just earn 10 points.");
}
