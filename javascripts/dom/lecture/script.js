// get referenece to container div
const container = document.querySelector('#container');

// create new div and store in variable contetn
const content = document.createElement('div');

// add class and text 
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

// append div to container
container.appendChild(content);