//object destructuring 

const person = { 
    name: 'Gary', 
    lastName: 'vee', 
    car: { 
        color: 'red', 
        wheels: 4, 
    }, 

    animals: { 
        dogs: { 
            name: 'Fluffy',
            age: 3, 
        }, 
        cat: { 
            name: 'Kitteeth', 
            age: 3, 
        }
    }
}


//how to use object destructuring 
const { name, lastName, car: { color, wheels }, animals } = person; //brining these properties outside in the global scope 
//now you can use this as: 
console.log(name); 
console.log(lastName); 


//console.log(person.name);  
console.log(person.lastName); 
console.log(person.car.color); 
console.log(person.car.color); 
console.log(person.car.wheels); 
console.log(person.animals.dogs.name); 
console.log(person.animals.cat.age); 

//dry stands for don't repeat yourself 


//Object destructuring is used in a couple ways; backend 

//Node 
const test = (req, res) => { 
    const { body, params} = req; 
}

//react 
const Component = ( { keys, values} ) => { 

}

//Array destructuring 
const introduction = ['hello', 'i', 'am', 'frank']; 

const [greeting, ,,name2] = introduction; //this is how you would do array destruction. 

console.log(greeting, name2); 


