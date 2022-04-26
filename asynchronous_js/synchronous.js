/*
Synchronous JS - code is executed line by line and their tasks are 
completed instantly, there is no time delay in the completion of the tasks 
for those lines of code 
*/ 

const functionOne = () => { 
    console.log('Function one'); //first executed 
    
    functionTwo(); 

    console.log('Function One, Part 2'); // third executed 
}

const functionTwo = () => {  //second executed
    console.log('Function two'); 
}

functionOne(); 

//Swithcing to asynchronous code 

const afunctionOne = () => { 
    console.log('Function one'); //first executed 
    
    afunctionTwo(); 

    console.log('Function One, Part 2'); //second executed 
}

const afunctionTwo = () => { 
    setTimeout(() => console.log('Function two'), 2000); // waiting - after two seconds this will execute 

}

afunctionOne(); 
