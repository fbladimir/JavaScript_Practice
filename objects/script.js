// object is an unordered collection of related data in form of key and value pairs.

const person = { 
    firstName: 'John', 
    lastName: 'Doe', 
    age: 25, 
    car: { 
        year: 2015, 
        color: 'red', 
    }

}

//Acessing, adding and updating properities of an object 

//updating age 
person.age = 26; 

//access dynamically 

const property = 'test'; 

person[property]; 

console.log(person); 

//object methods 

const dog = {
     name: 'Fluffy', 

    bark: () => { 
      //one way of creating a method  
       
        console.log("Woof woof!"); 

    }, 

    //myMethod2: function() { 
        //a second way 
    //}, 

    //myMethod3: () { 
        //a third way 
    //}, 

}

dog.bark(); 

//another example of using func inside an object 

const cat = { 
    name: 'Momo', 
    age: 2, 

    allProperties: function() { 
        console.log(this.name, this.age); 
    }
}

cat.allProperties(); 


//BUILT IN OBJECT METHODS 


const workers = { 
    boss: 'Michael', 
    secretary: 'Pam', 
    sales: 'Jim', 
    accountant: 'Oscar'
}; 

const sessions = { 
    id: 1, 
    time: '25-august-2022', 
    device: 'mobile', 
    browser: 'Chrome'
}; 

//object.keys() - creates an array containing the keys of an object 
const positions = Object.keys(workers); 

console.log(positions); 

//object.values() - creates an array containing the values of an object 
const sessionInfo = Object.values(sessions); 

console.log(sessionInfo); 

//object.entries() - creates a nested array of the key/value pairs of an object 

const operatingSystem = { 
    name: 'Ubuntu', 
    version: 18.05, 
    license: 'Open source'
}; 

const entries = Object.entries(operatingSystem); 

console.log(entries); 

entries.forEach( entry => { 
    let key = entry[0]; 
    let value = entry[1]; 

    console.log(`${key}: ${value}`); 
}); 


//object.freeze() - prevents modifications of exisiting properities and prevents properties from being added or removed 

const user = {  
    username: 'John', 
    password: '1231313'
}; 

const admin = Object.freeze(user); 

admin.password = '14234232'; // this will not change 
admin.username = 'testst'; //this will not change it 

//object.seal() prevents new properties from being added 
const newUser = Object.seal(user); 

newUser.password = 'test123'; 
newUser.active = true; 

console.log(newUser); //password is changed but the new property cannot be added 



