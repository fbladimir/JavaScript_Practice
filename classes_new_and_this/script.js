//"new" keyword - creates a new object 

const person = {}; //this is an object 

const person1 = new Object(); //this also creates an object - allows us to create an object constructor 

person.firstName = 'John'; 
person1.firstName = 'John'; 



console.log(person); 
console.log(person1); 

//same with arrays 
const arr = [1,2,3,4]; //literal 
const arr1 = new Array(); 

arr.push(5); 

console.log(arr); 

//when to use new keyword example 
const myDate = new Date('August 11, 2025'); 

console.log(myDate.getFullYear()); //we can use get methods  


console.log(Array); 
console.log(Object); 
console.log(Number); 
console.log(Date); 

const myNumber = new Number(100); //we can use a lot of built in properties

console.log(myNumber.toFixed(0)); 


//------------------THIS KEYWORD----------------// 

//cannot use this keyword with arrow function 

function Sentence(words) { 
    this.words = words; //points to a particular object

    console.log(this); 
} 

const firstString = new Sentence('Hello, this is a sentence'); 

//how it works with objects 

const newPerson = { 
    name: 'John', 
    getName() { 
        console.log(this); 
    }
}

newPerson.getName();

//another example 

//constructor function 
function car(color, brand, wheels) { 
    this.color = color; 
    this.brand = brand; 
    this.wheels = wheels; 

    console.log(this); 
}

const blueCar = new car('blue', 'bmw', 4); 

//------------------------CLASSES-------------------//

// class- schema for an object that can save many values 

const person2 = { 
    name: 'Melissa', 
    age: 24, 
    isWorking: true, 
}

//creating  a class - not an object  
class Person3 { 

    constructor(name, age, isWorking) { 
        this.name = name; //reference 
        this.age = age; 
        this.isWorking = isWorking; 
    }
}

//initiate a variable with any name 

const user = new Person3('Melissa', 25, true);

console.log(user); //person type object 

//Using functions to create an object 

const createPerson = (name, age, isWorking) => ({ 
        name: name,
        age: age,
        isWorking: isWorking
}); 

const anotherUser = createPerson('Johny', 35, false); 

console.log(anotherUser); 


