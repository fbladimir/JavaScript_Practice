//DOM - javasrcipt standard to access and share documents over the internet 
//allows us to modify the webpages html 

/*1. accessing elements using DOM 
get by id document.getElementbyID('IDname'); 
get by tag document.getElementsbyTagName(h1); 
get by class document.getElementsByClassName('className'); 
get by css selectors document.querySelectorAll('h2.test');  */ 

//tag name h1, h2 etc
//class .className .anotherClassName
//id #idName #anotherID name 

//--------------ELEMENTS PROPERTIES AND METHODS -------------------------//
/*store in const ex: const el = document.querySelector("#heading"); 
use el with classlist: el.classList - returns a doc token list with all the classes 
el.className //specific strings 
el.id - gets id 
el.innerHTML returns test */  

/*<button> created in HTML - 
store button into a const button = document.querySelector('button'); 
We can now use this const button we created with eventlistener 
button.addEventListener('click', () => { alert('you clicked on the button') }); //this will show the alert once clicked  
more button properties 
button.getBoundingClientRect(); //gets a lot of information about button 
hasAttribute - button.hasAttribute('type'); // false because button doesn't have it but you can add it to button 
removeAttribute - removes the attribute */ 

//using the actual script file with our html 

const menuClicked = (currEl) => { 

    const menuItem = document.getElementsByClassName('menu-item'); 

    for(let i = 0; i < menuItem.length; i++) { 
        menuItem[i].classList.remove('active'); 
    }

    currEl.classList.add('active'); 

}


//-----------------CREATE, TRAVERSE, REMOVE NODES----------------------------// 

//create an element 
//document.createElement("h1"); 

const heading = document.createElement('h1'); 
const body = document.querySelector('body'); 

//now we can use body to append a child 
body.appendChild(heading); 

//element is created now we can use it 
heading.innerText = 'hellooooooo this was created in javascript'; 

//traverse different elements in the dom 
const subjects = document.querySelector('.subjects'); 

subjects.firstElementChild; //gets first element
subjects.lastElementChild; //gets last element 

const favSubject = document.querySelector('.fav-subject'); 

//get elements 
favSubject.previousElementSibling;
favSubject.nextElementSibling; 
favSubject.parentElement; //get the whole ul  

/* A LOT more methods 
- ele.childNodes 
- ele.firstChild 
- ele.lastChild 
- ele.previousSibling 
- ele.nextSibling 
- ele.parentNode 
*/ 

//-----How to remove html elements-----// 

//remove favSubjects 

favSubject.remove(); //element is completly removed 





