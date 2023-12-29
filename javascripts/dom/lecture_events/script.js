// get the button and set action based on id
const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => { 
//     alert("Hello World");
// });

// or we can write in separated function
function alertHello() {
    alert("Hello World");
}
btn.addEventListener('click', alertHello)

btn.addEventListener('click', function (e) {
    // log PointerEvent
    // console.log(e);

    // change color of object button e after clicking
    e.target.style.background = 'blue';
});