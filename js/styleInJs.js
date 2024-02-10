console.log('style in js via dom manipulation');

let sections = document.querySelectorAll('section');

// console.log(sections);

for (const i of sections) {
    console.log(i);

    i.style.border = '2px solid steelblue';
    i.style.borderRadius = '16px';
    i.style.backgroundColor = '#acacac';
    i.style.margin = '5px';
    i.style.paddingLeft = '10px'
}

let final = document.getElementById('result');

final.classList.add('text-center');
final.classList.add('large-text');


// ---------- Node -----------
console.log('NodeList, Htmlcollection, ParentNode, Childnodes, CreateElement');

// node child --> #text around each element
console.log(final.firstChild);
console.log(final.childNodes);

console.log(final.childNodes[1].nextSibling);
console.log(final.childNodes[1].previousSibling);

// element child
console.log(final.childElementCount);

console.log(final.lastElementChild.previousElementSibling);


// --------- create element ----------
const li = document.createElement('li');
li.innerText = 'Brand New place to go'

console.log(li);


// ------ append child -------
final.childNodes[3].appendChild(li);
console.log(final);


/**
 * --------- parent node ----------
 * 
 * --> parentElement is same
 * --> great parent is document. then null
*/
console.log(final.parentNode);
console.log(final.parentElement.parentElement.parentNode.parentNode);
console.log(final.parentElement.parentElement.parentNode.parentNode.parentNode);