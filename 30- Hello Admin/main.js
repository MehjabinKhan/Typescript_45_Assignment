"use strict";
// Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
let userName = ["Alishba", "Mubashir", "Admin", "Aliraza", "Mehjabin"];
userName.forEach(oneuser => {
    if (oneuser === "Admin") {
        console.log(`Hello! ${oneuser} Would you like to see a status report?`);
    }
    else {
        console.log(`Hello! ${oneuser} thank you for logging in again.`);
    }
});
