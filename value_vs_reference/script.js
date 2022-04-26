//primitive values: number, string, boolean ,null, undefined 
//complex values: objects, arrays 

//copying numbers 

let x = 1; 
let y = x; 

x = 2; 

console.log(x); //2 
console.log(y); // 1 

//copying strings 
let firstPerson = "Mark"; 
let secondPerson = firstPerson; 

firstPerson = "Austin"; 

console.log(firstPerson); //Austin 
console.log(secondPerson); //mark 

//COMPLEX VALUES 

//copying arrays 
const animals = ['dogs', 'cats']; 

const otherAnimals = animals; //reference to animals 

animals.push("Goat"); 

console.log(animals); //dogs cats goat 
console.log(otherAnimals); //dogs cats goat 

// although animals and otherAnimals contain the same values using === to compare will be false because they both have a different location in memory 

//SHADOW CLONING 

//1st way: spread operator 

const numbers = [1,2,3,4,5]; 

console.log(...numbers); //... is spread operator 

const copiedNumbers = numbers; 
const newNumbers = [...numbers ];
const newNumbers2 = numbers.slice(); 


numbers.push(6); 

console.log(numbers); //will return 6 
console.log(newNumbers); // this will return an array back  -- will not change 
console.log(newNumbers); // will not changed (new array )
console.log(newNumbers2); 


//2nd way: array.slice() - copies entire array and get certain parts of it 


const person = { name: 'john', age: 20}; 
const otherPerson = { ...person }; 

//using object.assign() to create a new object 
const thirdPerson = Object.assign({}, person); //add properties from person object to a new object 

person.age = 22; 

console.log(person); // changed 
console.log(otherPerson); //did not change 
console.log(thirdPerson); //new object with same properties as person 

// --------------DEEP CLONING----------------------


const person2 = { 
    name: 'emma',
    car: { 
        brand: 'bmw', 
        color: 'blue', 
        wheels: 4
    }
}

const newPerson2 = { ...person2 }; 
const newPerson3 = { ...person2, car: { ...person2.car }}; // makes sure to take out the reference from person2 
newPerson2.car.color = 'red'; 

person2.name = 'Mia'; 

console.log(person2); //changes, the color of car changes 
console.log(newPerson2); //does not, the color of car changes as well 
console.log(newPerson3); //fixes the issue of not getting the same properties as person2 

//If the object is nested (this is where deep clone is useful )

const stringifiedPerson = JSON.stringify(person2); 

console.log(stringifiedPerson); 

const newPerson4 = JSON.parse(JSON.stringify(person2)); //object that is a deep clone of person2 

newPerson4.name = 'Test'; 
newPerson4.car.color = 'black'; 

console.log(person2); 
console.log(newPerson4); //changes 









