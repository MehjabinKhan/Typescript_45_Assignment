// Do the following to create a program that simulates how websites ensure that everyone has a unique username
let current_users = ["Mubashir","AliRaza","meerub","Rizwana","Zahid","Zara"];
let new_users = ["Kiran","Ramal","Alishba","Mehjabin","Meerub"];
// loop to check username available
new_users.forEach(new_one_users => {
//  condition for username already in use   
   let condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_users.toLowerCase());
    if (condition){
    console.log(`Sorry! ${new_one_users} is already in use.`)
    }
    else {
        console.log(`This username ${new_one_users} is available`)
    }
})
