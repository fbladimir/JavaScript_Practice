//ECMASCRIPT 6 or simply ES6 - contains various features (remains the most significant)

// const and let - widely used features of es6 

var age = 20; // reassign variables using var 


let age2 = 27;  //let does not allow you to create more than 2 variables with the same name 

const password = '1234234'; 

//password = '15453453'; //password cannot change because it is a constant variable 

//Arrow functions 
//instead of 
function mult(x) { 
    return x * x; 
}

const multiply = (x) => x * x; //easier to read 

//Default parameters 

const add = (a,b,c) => { 
    return a + b + c; 
} 

console.log(add(2,2,2)); 


//Template strings 

const customer = 'John'; 

const order = { 
    name: 'ipad', 
    price: 1400, 
}


//the old way... 
const message = 'Hello ' + customer + 'Do you want to buy ' + order.name + ' for ' + order.price; //this is too long 

console.log(message); 

//Doing the same thing using template strings 

const message2 = `Hello ${customer}, would you like to buy an ${order.name} for the price of ${order.price}`; 

console.log(message2); 







