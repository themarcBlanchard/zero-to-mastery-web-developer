// this is dom manipulation javascript
const log = console.log;
const logE = console.error;


// dom selectors
const btn = document.getElementById('enter');
const input = document.getElementById('user_input');
const ul = document.querySelector('ul');


// functions
function inputLength() {
    return input.value.length;
}

function createListElement() {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
}

function addListAfterClick(){
    if(inputLength() > 0) {
        createListElement();
     }
}

function addListAfterEnter(event){
    if(inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

// dom event listeners
btn.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterEnter);

