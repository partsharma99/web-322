class architect{

    name;
    age;
    occupation = "architect";

    constructor(setName, setAge){
        this.name = setName;
        this.age = setAge;
    }

    setName(newName){this.name = newName}
    setAge(newAge){this.age = newAge}
    getName(){return this.name;}
    getAge(){return this.age;}
}

var architect1 = new architect("Joe", 34);
var architect2 = new architect("Mary", 49);

console.log(architect1.name);
console.log(architect1.getName());
console.log(architect2.getName());