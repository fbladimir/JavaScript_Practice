//if statement 

const age = 10; 

if(age > 18) { 
    console.log("You may enter!"); 
} else if ( age < 18) { 
    console.log("You may not enter!!!"); 
}

//switch statements 

const superHero = 'Iron Man'; 

switch(superHero) { 
    case 'Iron man': 
        console.log("I am Iron man"); 
        break; 
    case 'Thor': 
        console.log("That is my hammer"); 
        break; 
    
    }

//Ternary Operator 

const age2 = 18; 

if (age2 >= 18) { 
    console.log("You can drive");  
} else { 
    console.log("You cannot drive yet"); 
}

//ternary operation: is same as above 
age2 >= 18 ? console.log("You can drive") : console.log("You cannot drive yet") 

//looping - while and for loops 

//while loop 

let i = 0; 

while (i < 10) { 

    console.log(i);
    i++; 

}

//for loop 

for (let i = 0; i < 10; i++) { 
    console.log(i); 
    i++; 
}

