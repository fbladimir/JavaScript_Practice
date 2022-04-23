//declaring an array 

const cars = ['Mustang', 'Lambo', 'Ferrari']; 

//length of array 

console.log(cars.length); 

//array can store elements of any type 

const arr = [ 
    'Apple', 
    {name: 'John'}, 
    true,
    function()  {
        alert('hello'); 
    }
]

//loop an array using for loop 

for(let i = 0; i < cars.length; i++) { 

    console.log(cars[i]); 
}

//ARRAY METHODS 

//PUSH() - adds an element at the end of an array 
cars.push('Bugatti'); 

//Pop() - delete last element of an array 
cars.pop(); 

//shift() - deletes first element 

cars.shift(); 

//unshift() - adds new element to the front of an array 
cars.unshift('GT'); 

//splice() - adds/removes values from any position of an array 
cars.splice(2,2); 

//slice() - copies certain elements of an array into a new array 
const badCars = cars.slice(1);

console.log(badCars); 

//forEach() - exactly like a for loop without all of the extra conditions

let names = ['Frank', 'Cam', 'John', 'Henrius']; 

names.forEach((names) => { 
    console.log(names); 
}); 


//Another example of using forEach() 

let sum = 0; 
const numbers = [6,7,8,9,10]; 

numbers.forEach((numbers) => { 
    sum += numbers; 
}); 

console.log(sum); 

//Array Map .map() -- allocates memory in order to store and return values 

const inventory = [ 
    {price: 5, name: 'eggs'}, 
    {price: 4, name: 'ham'}, 
    {price: 3, name: 'mayo'}, 
    {price: 6, name: 'bread'}, 

]; 

const prices = inventory.map((inventory) => inventory.price); 

console.log(prices); 

const items = inventory.map((inventory) => inventory.name); 

console.log(items); 


//Filter methods for Arrays 

const moreNumbers = [-10, 0, -2, 15, -35, 25]; //array of both postive and negative ints 

//filter positive numbers only 

const positiveNumbers = moreNumbers.filter((moreNumbers) => moreNumbers >= 0); 

console.log(positiveNumbers); 

const negativeNumbers = moreNumbers.filter( (moreNumbers) => moreNumbers <= 0   ); 

console.log(negativeNumbers); 

//Another example 

const employeeData = [ 

    { name: "Sebastian", overTime: 5, }, 
    { name: "Cardi", overTime: 10 }, 
    { name: "Jorge", overTime: 12 }, 



]; 

const employeesToReward = employeeData.filter(  (employeeData) => employeeData.overTime >= 7); 

const employeeNames = employeesToReward.map( (employee) => employee.name); 

employeeNames.forEach( (name) => console.log(`${name} will receive an award! Congratulations.`)); 


console.log(employeeNames); 


//Array Find 

const numeros = [1,2,3,4,5,6,7,8,9,10]; 

const value = numeros.find( (number) => number > 5); 

console.log(value);

//Another example 

const states = ['Alaska', 'California', 'Colorado', 'Hawaii']; 

const state = states.find( (state) => state.startsWith('C')); 

console.log("The State that starts with C is ", state); 

//Array includes() -- Checks if an array contains a certain value and returns True or False 

var bookShelf = ["Moby Dick", "Little Women", "The Great Gatsby", "Pride and the Prejudice"]; 

if (bookShelf.includes("Moby Dick") === true) { 
    console.log("The book you were looking for was found"); 

} else { 
    console.log("The book you are looking for was not found sorry"); 

}

//Array Sort 

const someNames = ['Anne', 'Carl', 'Bob', 'Dean']; 

const sortedNames = someNames.sort(); 

console.log(sortedNames);


// Array Some and Every methods 

const someArray = [1,2,3,4,5]; 

//Array Some - Whether at least one element of the array passes a certain test (any function)

const greaterThan3 = (number) => number > 3; 

console.log(someArray.some(greaterThan3)); //we get true bc some elements are greater than 3  

//Array Every - every element has to be greater 

console.log(someArray.every(greaterThan3)); //false 

//ARRAY REDUCE - iterates over all elements in an array and computes them into a single value 

const groceryList = [29, 12, 45, 35, 87, 110]; //we want to use reduce to find the total sum 

const total = groceryList.reduce( (accumulator, currentValue) => { 

    return accumulator + currentValue; 

}, 0);

console.log(total); 




















