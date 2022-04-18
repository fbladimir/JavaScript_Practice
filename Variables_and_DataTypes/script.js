//Creating a variable older version 

var variableName = "This is a variable"; 

//creating a variable newer version (preferred way)

let variableName1 = "This is also a variable"; 

//variable that will not change and cannot be reassigned  
const variableName2 = "Hello"; 


console.log(variableName);

//working with strings 
console.log("Working with strings: "); 

const name = 'Franklin';
//using backstick to concatenate strings  
const fullName = `${name} Bladimir`; 

console.log(fullName); 

//this will show the type 
console.log(typeof name); 


//NUMBERS - in Javascrit you do not use int, float instead you use let or const  

const wholeNumber = 5; 
const decimalNumber = 5.5;

console.log(wholeNumber); 

//result of both numbers 

const result = wholeNumber + decimalNumber; 
console.log("The result is " + result); 

//BOOLEANS t/f 

const isCool = true; 
console.log(typeof isCool); 

//NULL (not assigned)
const age = null; 

console.log(null); 

//OBJECTS 
const firstName = 'John'; 
const firstAge = 25;

const person = { 
    firstName: 'John', 
    firstAge: 25, 
}

console.log(person); 

//get specific value from an object 
console.log(person.firstName);  

//ARRAY 
const arr = [1,2,3,4]; 
console.log(arr); 

//this is also an object 
const date = new Date(); 

console.log(typeof date);

//Statically Typed - has to be defined 
let message = "Hello, world"; 



//dynamically typed 
message = 5; 













