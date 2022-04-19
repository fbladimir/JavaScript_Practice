//closures in JavaScript

//closure gives you access to the outer function scope from an inner function as seeen below 

const outer = () => { 
    
    const outerVar = 'Hello!'; //local variable created 

    const inner = () => {  //inner function, a closure 
        const innerVar = 'Hi!'; 

        console.log(outerVar, innerVar); //using both variables of parent and inner 
    }

    return inner; 
    
}

const innerFn = outer(); 

innerFn(); 

