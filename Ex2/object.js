//Definng objects in JS using "Object Literal Notation"
var architect = {name: "Parth", 
                age: 22,
                occupation: "Student",
                setAge: function(newAge){this.age = newAge},
                setName: function(newName){this.name = newName}};

//If we wanna create a new object which as the same properties as an already made method, We use the follows:
var architect1 = Object.create(architect);
var architect2 = Object.create(architect);
//the above lines will create 2 new objects architect1 and architect2 which are same as architect method that we created

//These methods are new and seperate and can be manipulated individually
architect2.setName("Mary");
architect1.setName("Honey Singh");
console.log(architect.name);
console.log(architect1.name);
console.log(architect2.name);



