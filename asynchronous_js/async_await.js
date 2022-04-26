//Using async in a function 
//async functions return promises 

//ASYNC ==> AWAIT go hand in hand 

const fetchNumber = async () => { 
    return 25; //will not return this it will return a promise 
}

const consoleFetchNumber = async () => {
    const number = await fetchNumber(); 

    console.log(await fetchNumber()); //we can put await in front of the function call and we will get 25  
}

console.log(fetchNumber()); 

fetchNumber().then((number) => console.log(number)); //this will return 25 

consoleFetchNumber(); 



