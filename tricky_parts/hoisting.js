//HOISTING IN JAVASCRIPT - almost never used in modern javascript (variables and function declarations are moved to the top of their scope)

console.log(age); //will output an error can't be used 

//this is hoisting 
var age = 20; //declare it ontop or before 

console.log(age); 

//another example 
var hoist; 

console.log(hoist); //would be undefined 

hoist = "The variable has been hoisted"; 

//second example 

function hoist() { 

    console.log(message); //would be undefined

    var message = 'test'; //this has to be ontop 
}


//correct example of hoisting 

function hoist2() { 
    var message = 'test'; //this would be considered hoisted 

    console.log(message); 
}

hoist2(); 