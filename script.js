"use strict";

// SLIDER
const slider = document.getElementById('grid-range');
const output = document.getElementById('grid-size');

//GRID
const gridBtn = document.getElementById('grid-btn');
const gridContainer = document.getElementById('grid-container');

//COLOR
const color = document.getElementById('color');
const colorValue = document.getElementById('color-value');
console.log(color.value);
//RESET
const reset = document.getElementById('reset');
const eraser = document.getElementById('eraser');

//CAT
const catImg = document.getElementById('img');
const catText = document.getElementById('cat');



gridBtn.addEventListener('click', function () {

    output.textContent = `GRID SIZE : ${slider.value} x ${slider.value}`;

    slider.oninput = function () {
        output.textContent = `GRID SIZE : ${this.value} x ${this.value}`;
    }

    for (let i = 0; i < slider.value ** 2; i++) {
        const gridItem = document.createElement('div');
        gridContainer.style.gridTemplate = `repeat(${slider.value},1fr)/repeat(${slider.value},1fr)`;
        gridItem.setAttribute('id', 'grid-item');
        gridItem.classList.add('grid');
        gridContainer.appendChild(gridItem);

        reset.addEventListener('click', function () {
            gridContainer.removeChild(gridItem);
        })

        gridItem.addEventListener('mouseover', function () {
            gridItem.style.backgroundColor = 'black';
        })

        eraser.addEventListener('click', function () {
            gridItem.addEventListener('mouseover', function () {
                gridItem.style.backgroundColor = 'white';
            })
        })
    }
});







catImg.addEventListener("click", function () {
    catText.textContent = "DON'T WAKE HER UP!";

})







