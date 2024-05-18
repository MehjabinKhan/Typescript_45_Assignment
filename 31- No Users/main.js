"use strict";
// Add an if test to Exercise 28 to make sure the list of users is not empty.
let userName = ["Alishba", "Mubashir", "Admin", "Aliraza", "Mehjabin"];
// empty user list 
userName = [];
if (userName.length === 0) {
    console.log("We need to find some user!");
}
else {
    userName.forEach(oneuser => {
        if (oneuser === "Admin") {
            console.log(`Hello! ${oneuser} Would you like to see a status report?`);
        }
        else {
            console.log(`Hello! ${oneuser} thank you for logging in again.`);
        }
    });
}
