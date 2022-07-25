// getting the selectors
const h3 = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.querySelector('body');

// functions for the color pickers
function colorPicker(){
    return body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
};

/* event listeners */
color1.addEventListener('input', colorPicker);
color2.addEventListener('input', colorPicker);
