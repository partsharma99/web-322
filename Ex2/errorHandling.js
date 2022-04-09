//isNan() function is elegantly respond to a situation in which a number was expected, but not returned
let x = "twenty"
let y = parseInt(x)

if(isNaN(y)){
    console.log("x cannot be converted to a number")
}else{
    console.log("success! the numeric value of x is: " + y);
}

//isFinite() function to handle a situation where division by zero has occurred
x = 30, y = 0;

let z = x/y;

if(isFinite(z)){
    console.log("success! " + x + "/" + y + "=" + z)
}else{
    console.log(x + " is not divisible by " + y)
}

//Using try and catch blocks:

const PI = 3.14159;

console.log("trying to change PI!");
//using error.message and error.stack, we can agin further insight into what exactly went wrong and we can wither
//refactor our code to remedy the error
try{
    PI = 99;
}catch(ex){
    console.log("uh oh, an error occurred: " + ex.message)
}finally{
    console.log("always execute code in this block")
}

console.log("Alas, it cannot be done, PI remains: " + PI);

//Using the throw keyword
function divide(x,y){
    if(y == 0){
    throw new Error("Division by Zero!");
    }
    return x / y;
}

let a = 3, b = 0, c;

try{
    c = divide(a,b);
}catch(ex){
    console.log("uh oh, an error occurred: " + ex.message); 
    // outputs: uh oh, an error occurred: Division by Zero!
    c = NaN;
}

console.log(a + " / " + b + " = " + c); // 3 / 0 = NaN


