// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt (size: string = "large", message: string = "I Love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${message} prints on shirt.`)
}

// calling function by defult values
make_shirt();

// calling function with medium size & defult message
make_shirt("medium");

// calling function with different values
make_shirt("small","I Love Pakistan");