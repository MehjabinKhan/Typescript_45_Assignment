"use strict";
// You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
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
