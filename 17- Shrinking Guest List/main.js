"use strict";
// You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// creating a guest list array
let guestList = ["Rizwana", "Zahid", "Mubashira", "AliRaza"];
// making variable for those who dont come
let donotCome = guestList[2];
// printing the name of the guest who donot come
console.log(`${donotCome}, "I will not be able to come."`);
// add & remove values from guest list array
guestList.splice(2, 1, "Alishba");
// message for big table dinner
console.log("Good News! We have found a Bigger Table for Dinner.");
// new guest at begining
guestList.unshift("Zara");
// get a middle index
let middleIndex = Math.floor(guestList.length / 2);
// add a new guest in middle
guestList.splice(middleIndex, 0, "mehjabin");
// new guest in the end
guestList.push("Kiran");
console.log("New List of guests");
// sending invitation
guestList.forEach(oneguest => console.log(`Hello! ${oneguest}, Would you like to join me for dinner?`));
// inform that only two guest can joined for dinner
console.log("Unfortunately, the new dinner won't arrive on time,only two guest can joined me for dinner");
// used while-loop to remove guest until 2 names left
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry! ${removeGuest} I can't invite you for dinner`);
}
// invitation to last 2 guest
console.log("Invitation to the last 2 guest");
guestList.forEach(lastTwo => console.log(`Luckly ${lastTwo}, you are still invited`));
// removing the last two guest
guestList.pop();
guestList.pop();
console.log("Empty list:", guestList);
