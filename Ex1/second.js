//The readline module in js can be used to take user inputs
var readline = require('readline'); //require() returns an object from the core "readline" module, which we store in var readline
//Now we have access to all of the functionality from readline module, incluiding an input output mechanism via the createInterface() method
//which creates a new interface instance
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//We use question() to capture user data at the command prompt
rl.question('Enter Your Name: ', function(answer){
    console.log('Hello ' + answer);
    rl.close();
});