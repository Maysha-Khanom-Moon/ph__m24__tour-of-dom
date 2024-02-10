console.log('append js');

/**
 * -------- append child ---------
 * 1. where to add
 * 2. what to be added
 * 3. add the child child
 */

// 1.
const fol = document.getElementById('fol');
console.log(fol);

// 2.
const li1 = document.createElement('li');
li1.innerText = 'Malta';

// 3.
fol.appendChild(li1)


// ----- add a section in main div -----
// where to add
const main = document.querySelector('main');

// what to be added
const section = document.createElement('section')

const h1 = document.createElement('h1');
h1.innerText = 'My Food list';

const ul = document.createElement('ul')
const LI1 = document.createElement('li')
LI1.innerText = 'Biryani';
const LI2 = document.createElement('li')
LI2.innerText = 'salad';
const LI3 = document.createElement('li')
LI3.innerText = 'Rejala';

// add the child
ul.appendChild(LI1);
ul.appendChild(LI3);
ul.appendChild(LI2);

section.appendChild(h1);
section.appendChild(ul);

section.style.backgroundColor='#dadada';
section.style.borderRadius='15px';

section.classList.add('text-center');

main.appendChild(section)



// ------ set innerHTML directly -------
const sectionDress = document.createElement('section');

sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
    <li>Fotua</li>
    <li>jens</li>
    <li>shirt</li>
</ul>
`

main.appendChild(sectionDress);