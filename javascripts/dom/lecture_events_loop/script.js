// get all the button 
const buttons = document.querySelectorAll("button")

// for each button, create alert 
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    })
})