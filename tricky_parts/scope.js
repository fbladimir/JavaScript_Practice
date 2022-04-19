//THREE TYPES OF SCOPES 
//GLOBAL, Function, BLOCK

//GLOBAL (you can use the variable name in all functions)
const name = 'John'; 

const logName = () => { 
    console.log(name); 
}

logName(); 


const someFunction = () => { 
    //local scope #1 
    const name = 'John'; 

    console.log(name); 

    const anotherFunction = () => { 
        //local scope #2 (accessible inside this function)
        console.log(name); 
    }

    anotherFunction();
}
 

someFunction(); 

//Block scope - available only in the inside of the block of code created in

if(true) { 
    const name = 'john'; 
    var name2 = 'johnny'; //var is accessible 

    console.log(name); 
}

console.log(name); // will not work .







