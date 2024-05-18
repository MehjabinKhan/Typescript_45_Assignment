"use strict";
// You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guestList = ["Rizwana", "Zahid", "Mubashira", "AliRaza"];
let donotCome = guestList[2];
console.log(`${donotCome}, "I will not be able to come."`);
guestList.splice(2, 1, "Alishba");
guestList.forEach(guest => console.log(`Hello! ${guest}, Would you like to dinner with me?`));
