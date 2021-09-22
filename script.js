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
const colorBtn = document.getElementById('color-btn');

//RESET
const reset = document.getElementById('reset');
const eraser = document.getElementById('eraser');

//CAT
const catImg = document.getElementById('img');
const catText = document.getElementById('cat');

//RANDOM COLOR
const randomColor = document.getElementById('random');
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

//swatches1
const swatches1 = document.getElementById('swatches1');
const blueOrange = ['#D79922', '#EFE2BA', '#F13C20', '#4056A1', '#C5CBE3', '#85DC0B', '#E3E2DF'];

//swatches2
const swatches2 = document.getElementById('swatches2');
const redGreen = ['#41B3A3', '#C38D9E', '#5CDB95', '#5D001E', '#E3AFBC', '#9A1750', '#E27D60'];






gridBtn.addEventListener('click', function () {

    // SLIDER
    output.textContent = `GRID SIZE : ${slider.value} x ${slider.value}`;

    slider.oninput = function () {
        output.textContent = `GRID SIZE : ${this.value} x ${this.value}`;
    }

    //GRID
    for (let i = 0; i < slider.value ** 2; i++) {
        const gridItem = document.createElement('div');
        gridContainer.style.gridTemplate = `repeat(${slider.value},1fr)/repeat(${slider.value},1fr)`;
        gridItem.setAttribute('id', 'grid-item');
        gridItem.classList.add('grid');
        gridContainer.appendChild(gridItem);

        //RESET
        reset.addEventListener('click', function () {
            gridContainer.removeChild(gridItem);
        })

        //GRID DEFAULT
        gridItem.addEventListener('mouseover', function () {
            gridItem.style.backgroundColor = `${color.value}`;
        })


        //RANDOM COLOR
        randomColor.addEventListener('click', function () {

            gridItem.addEventListener('mouseover', function () {
                gridItem.style.backgroundColor = rainbow[`${mathRandom()}`];
            })
        })


        //SWATCHES1
        swatches1.addEventListener('click', function () {
            gridItem.addEventListener('mouseover', function () {
                gridItem.style.backgroundColor = blueOrange[`${mathRandom()}`];
            })
        })


        //SWATCHES2
        swatches2.addEventListener('click', function () {
            gridItem.addEventListener('mouseover', function () {
                gridItem.style.backgroundColor = redGreen[`${mathRandom()}`];
            })
        })

        //ERASER
        eraser.addEventListener('click', function () {
            gridItem.addEventListener('mouseover', function () {
                gridItem.style.backgroundColor = 'white';
            })
        })
    }
});

//COLOR DISPLAY
colorBtn.addEventListener('click', function () {
    colorValue.textContent = color.value;
})


//CAT IMAGE 
catImg.addEventListener("click", function () {
    catText.textContent = "DON'T WAKE HER UP!";

})


//RANDOM NUMBER GENERATOR
function mathRandom() {
    return Math.trunc(Math.random() * 7);
}

console.log(mathRandom());