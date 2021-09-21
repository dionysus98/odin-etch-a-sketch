"use strict";
// SLIDER

const slider = document.getElementById('grid-range');
const output = document.getElementById('grid-size');
const gridBtn = document.getElementById('grid-btn');
const gridContainer = document.getElementById('grid-container');
const gridItem = document.createElement('div');




output.textContent = `GRID SIZE : ${slider.value} x ${slider.value}`;

slider.oninput = function () {
    output.textContent = `GRID SIZE : ${this.value} x ${this.value}`;

    for (let i = 0; i < this.value ** 2; i++) {
        const gridItem = document.createElement('div');
        gridContainer.style.gridTemplate = `repeat(${this.value},1fr)/repeat(${this.value},1fr)`;

        gridBtn.addEventListener('click', function style() {
            gridItem.classList.remove('grid');
            gridItem.classList.add('grid');
            gridContainer.appendChild(gridItem);
        })

    }


}

//


