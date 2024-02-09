console.log('these are from extarnal');

console.log('hello form JS');

// document: carries all the dom properties
// via these properties we can do dom manipulation
console.log(document);
console.log(document.body);


// --------- class ----------
let result = document.getElementById('result')

// get attribute
console.log(result.getAttribute('class'));; // get all class names

// remove attribute
result.classList.remove('low'); // remove from classList

// add attribute
result.classList.add('LOW'); // add at classList

console.log(result.classList);
console.log(result.getAttribute('class'));


// ---------- style -----------
let header = document.querySelector('header')

// get attribute
console.log(header.getAttribute("id"));
console.log(header.style);

// set attribute
header.setAttribute('title', 'tooltip set by javascript')
