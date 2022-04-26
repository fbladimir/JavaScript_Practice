//asynchronous code 

//there are premade functions that allow us to execute chunks of code in time intervals 

//SetInterval - allows to execute a chunk of code specified millisecond 

// setInterval(() => { 
//     console.log('Helloooooo'); 
// }, 1000); 

//interval can be stored as a variable 

const myInterVal = setInterval(() => console.log('helloooooo'), 1000); 

clearInterval(myInterval); //this will clear myinterval after a certain action 


//SetTimeout - allows you to wait a certain amount of time before executing a chunk of code 
const myInterval2 = setTimeout(() => console.log('hellooooooo2'), 5000); //after 5 seconds 

clearTimeout(myInterval2); 


