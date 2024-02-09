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