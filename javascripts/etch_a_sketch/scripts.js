// create grid and add event listener
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('grid-container');
    for (let i = 0; i < 16 * 16; i++) {
        const div = document.createElement('div'); // this means to create a div element
        div.classList.add('grid-item'); // add style to a div
        container.appendChild(div);
    }

    // Add event listeners to each grid item, go thru each grid
    const gridItems = document.getElementsByClassName('grid-item');
    Array.from(gridItems).forEach(item => {
        item.addEventListener('mouseover', function handleMouseOver() {
            this.style.backgroundColor = 'red';
        });
    });
});

// reset color with a button
const reset_button = document.getElementById('reset-button');
reset_button.addEventListener('click', function resetDivColor() {
    const gridItems = document.getElementsByClassName('grid-item');
    Array.from(gridItems).forEach(item => {
        item.style.backgroundColor = '#f0f0f0';
    });
});