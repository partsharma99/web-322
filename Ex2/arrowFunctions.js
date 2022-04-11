var outputMessage = function(message){
    console.log(message);
};

//is the same as:
//parameter => logic
var outputMessageArrow = message => console.log(message);

outputMessage("Function Expression");
outputMessageArrow("Arrow Function");

var outputmessage = function(message1, message2){
    console.log(message1);
    console.log(message2);
};

var outputmessagearrow = (message1, message2) => {
    console.log(message1);
    console.log(message2);
};

outputMessage("Function", "Expression");
outputMessageArrow("Arrow", "Function");

var outputMessage = function(){
    console.log("yo");
};

var outputMessageArrow2 = () => {
    console.log("arrow yo");
}

var adder = function(num1, num2){
    return num1 + num2;
}

var adderArrow = (num1, num2) => num1 + num2;

console.log(adder(2, 2));
console.log(adderArrow(2,2));

/*
Be careful when using arrow functions, as not every situation calls for a “lexical this”. For example, when we declare methods on an object
using object literal notation, we always want “this” to point to the current object,
 so “lexical this” doesn’t make sense and arrow functions will actually fail to behave as expected:
*/
var test1obj = {
    a: "a",
    b: () => console.log(this.a)
}

test1obj.b(); // undefined

var test2obj = {
    a: "a",
    b: function() { console.log(this.a); }
}

test2obj.b(); // "a"
