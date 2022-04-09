//Another way of making objects:

function architect(inName, inAge){
    this.name = inName;
    this.age = inAge;
    this.occupation = "architect";
}

architect.prototype.setName = function(newName){this.name = newName};
architect.prototype.setAge = function(newAge){this.age = newAge};
architect.prototype.getName = function(){return this.name};
architect.prototype.getAge = function(){return this.age};

var architect1 = new architect("Joe", 34);
var architect2 = new architect("Mary", 49);

console.log(architect1.name);

console.log(architect1.getName());
console.log(architect2.getName());

//As the setTimeout() function is not executes as a method of our architect object
//if we use the this keyword to address this.name, it'll show an "undefined" error, hence, we save the reference of this before  
architect.prototype.outputNameDelay = function(){
    var that = this;
    setTimeout(function(){
        console.log(that.name);
    }, 1000);
}
architect.prototype.newMethod = function(){
    return "Hello " + this.name;
}
architect2.outputNameDelay();

console.log(architect2);

console.log(Object.getPrototypeOf(architect2));
console.log(architect2.newMethod());
// console.log(architect);

//Declaring variables with var, they can be used dynamically
//Declaring variables using let, they can be used only within the block statement like if clock or loop block
//Declaring variables using const, scope --> within the block, but the value is immutable i.e. once defines can not be changes later
