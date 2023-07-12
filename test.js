// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const redp = document.createElement('p');
redp.style.color = 'red';
redp.textContent = "Hey, I'm Red!"

container.appendChild(redp);

const blueh3 = document.createElement('h3');

blueh3.classList.toggle('blue');
blueh3.textContent = "I'm a blue h3!"

container.appendChild(blueh3);

const pinkDiv = document.createElement('div');

pinkDiv.setAttribute('style','background: pink; border: 1px solid black;')

// pinkDiv.style.backgroundColor = 'pink';

container.appendChild(pinkDiv);

const h1 = document.createElement('h1');

h1.textContent = "I'm a div!";

pinkDiv.appendChild(h1);

const metoop = document.createElement('p')
metoop.textContent = "ME TOO!";

pinkDiv.appendChild(metoop);


const btn = document.querySelector('#btn');

// btn.addEventListener('click', () => {
//     alert('You did it!!');
// });

function blue() {
    pinkDiv.style.background = 'blue';
}

btn.addEventListener('click', () => {
    pinkDiv.classList.toggle('blue');
});


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});


const text = document.querySelectorAll('p');

text.forEach((p) => {
    p.addEventListener('click', () => {
        p.classList.toggle('blue');
    });
});
  