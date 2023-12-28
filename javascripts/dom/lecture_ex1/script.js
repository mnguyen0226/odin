const container = document.querySelector("#container");

// a <p> with red text that says “Hey I’m red!”
const red_p = document.createElement('p')
red_p.style.color = 'red';
red_p.textContent = "Hey I'm red!"
container.appendChild(red_p)

// an <h3> with blue text that says “I’m a blue h3!”
const blue_h3 = document.createElement('h3')
blue_h3.style.color = 'blue';
blue_h3.textContent = "I'm a blue h3!"
container.appendChild(blue_h3)

// a <div> with a black border and pink background color with the following elements inside of it
const special_div = document.createElement('div')
special_div.setAttribute('style', 'background: pink; border: 2px solid black')
const div_h1 = document.createElement('h1')
div_h1.textContent = "I'm a div"
const div_p = document.createElement('p')
div_p.textContent = "ME TOO"
special_div.appendChild(div_h1)
special_div.appendChild(div_p)
container.appendChild(special_div)