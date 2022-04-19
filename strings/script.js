//basics of strings 

//3 ways to create strings 

const single = 'this is a string'; 
const double = "this is a string as well"; 
const backticks = `also a string`; 

//string length and other basic string properties 
const name = 'John'; 

console.log(name.length); 

//get a specific index 

console.log(name[0]); 

//storing into a variable 
const firstLetter = name[0]; 
const lastLetter = name[name.length - 1]; 

console.log(lastLetter); 

//change string case 
const mixedCaseString = "Hello! How are you? "; 

mixedCaseString.length; 
const lowerCaseString = mixedCaseString.toLowerCase(); 

console.log(lowerCaseString); 

const upperCaseString = mixedCaseString.toUpperCase(); 

console.log(upperCaseString); 

//SEARCHING FOR A SUBSTRING within a STRING 
const hobbies = "I love HTML, CSS and JavaScript"; 

//indexOf() 

const index = hobbies.indexOf('JavaScript', 0); //specify substring and starting index position 
console.log(index); 

//Returns the position of the frist occurence of a substring 


//@param searchStrin g- the substring to search for in the string 

//@param position - the index at which to begin sraching the string object, if omitted, serach starts at the beginning of string 


//lastIndexOf() 

const lastIndex = hobbies.lastIndexOf('JavaScript'); 

console.log(lastIndex); 

//Use Includes() to find out if the string contains substring 
const includesJavaScript = hobbies.includes('JavaScript'); //returns a boolean 

console.log(includesJavaScript); 

//StartsWith() 

console.log(hobbies.startsWith('I')); 


//endsWith() 

console.log(hobbies.endsWith('JavaScript.')); //should return false because it does not end with . 

//USING SLICE - returns the substring of a string 

const exampleString = 'HotDog'; 

//slice()

const dog = exampleString.slice(3,6); //from index 3-6 
console.log(dog); 



//SPLIT a string 
const exampleString2 = 'dog'; 

//split() - returns an array 
const letters = exampleString2.split(''); 

console.log(letters);

//reverse a string 
const exampleString3 = 'test'; 

//split it first then use reverse then join it 
const reversedString = exampleString3.split('').reverse().join(); 

console.log(reversedString); 

//repeat() - can be used to repeat the string however many times we want.  

const dogSays = "woof"; 

console.log(dogSays.repeat(5)); 


//trim() - getting rid of empty spaces. 
//useful when collecting user email 

const email = 'contact@franklinck.com   '; 
const fixedEmail = email.trim(); 

console.log(fixedEmail); 

//another example 
const exampleString4 = '            Hello, world'; 

console.log(exampleString4.trim()); 


//EXERCISE 

//guests 
const guests = 'Our guests are: emma, jacob, isabella, ethan'; 

//1. get a length of the string. Store it in a variable called length 
const length = guests.length; 

console.log(length); 

//2. uppercase the entire string 
//store the result in a variable called uppercaseguestlist 
const uppercaseGuestList = guests.toUpperCase(); 

console.log(uppercaseGuestList);    

//3. Check whether 'ETHAN' is on the uppercasedGuestList. 
//store the answer in a variable called isEthanOnTheList 
//the data type of the variable must be a boolean 
const isEthanOnTheList = uppercaseGuestList.includes('ETHAN'); 

console.log("Is ethan on the list? ", isEthanOnTheList); 

//4. Create a substring that only contains the following: 
//'Emma, Jacob,Isabella,Ethan'. 
//store the answer in a variable called substringGuests. 

const subStringGuests = uppercaseGuestList.slice(16, guests.length); 

console.log(subStringGuests); 

//5. out of the substring you just created, create an array of names of people 
//that are on the list. 
//store that array in a variable called guestsArr. 
const guestsArr = subStringGuests.split();
console.log(guestsArr); 

