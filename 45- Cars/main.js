"use strict";
// Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function create_car(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    // add additional object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
// call function to create a car
let myCar = create_car("Toyota", "Corolla", "Color: Black");
console.log(myCar);
