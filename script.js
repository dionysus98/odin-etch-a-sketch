"use strict";
// SLIDER

const slider = document.getElementById('grid-range');
const output = document.getElementById('grid-size');
const gridBtn = document.getElementById('grid-btn');
const gridContainer = document.getElementById('grid-container');
const gridItem = document.createElement('div');




gridBtn.addEventListener('click', function () {

    output.textContent = `GRID SIZE : ${slider.value} x ${slider.value}`;

    slider.oninput = function () {
        output.textContent = `GRID SIZE : ${this.value} x ${this.value}`;

    }
    for (let i = 0; i < slider.value ** 2; i++) {
        const gridItem = document.createElement('div');
        gridContainer.style.gridTemplate = `repeat(${slider.value},1fr)/repeat(${slider.value},1fr)`;
        gridItem.classList.add('grid');
        gridContainer.appendChild(gridItem);
    }
});

//


