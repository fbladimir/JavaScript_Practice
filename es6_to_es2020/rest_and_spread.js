//Spread andd rest Operator ( ...)

const add = (a,b) => { 
    return a + b; 
}

//creating a function that will work with rest 
//how to make our function accept as many parameters as it wants = using REST 
const substract = ( ...args) /* ... this is the rest operator */  => { 
    return args.reduce( (acc, val) => acc + val); 
}

console.log(add(2,2,2,2,2,2,2)); //this will still return 4 
console.log(substract(40,2,33,2,55,2,2)); //function will take all the paramters 


//Using spread 
const numbers = [1,2,3,4,5,6]; 

numbers.push(7); //this is not optimal 

const newNumbers = [ ... numbers, 7]; //spread the numbrs from original array and add inside 


console.log (numbers); 
console.log(newNumbers);

//you can do the same with objects 
const object = { name: 'john', age: 25}; 

//using spread on object 
const object2 = { ... object, name:'Jenny'};
 
const object1 = object; 

object1.name = 'jenny'; //both objects will change 


console.log(object); 
console.log(object1); 

