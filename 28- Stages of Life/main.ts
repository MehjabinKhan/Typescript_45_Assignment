// Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then

let age = 19;
if (age < 2) {
    console.log("the person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("the person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("the person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("the person is a teenager.")
}
else if (age >= 20 && age < 65) {
    console.log("the person is an adult.")
}
else if (age >= 65) {
    console.log("the person is an elder.")
}