// Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function create_car(manufacturer: string , model: any , ...options: {[key: string]: any} []){
    let car = {
     manufacturer: manufacturer,
     model: model,      
     ...Object.assign({}, ...options)
    }
    return car;
};
 

// call function to create a car
let myCar = create_car("Toyota","Corolla", {Color: 'Black'}, {year: 2020});
console.log(myCar);
