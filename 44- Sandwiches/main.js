"use strict";
// Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(...items) {
    items.forEach(singleitem => console.log("*" + singleitem));
}
// callong function with 3 different arguments
sandwich("egg", "cucumber", "cheese");
sandwich("chicken", "lettuce", "tomato");
sandwich("bread", "butter");
