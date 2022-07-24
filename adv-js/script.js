// this is dom manipulation javascript
const log = console.log;
const logE = console.error;


// dom selectors
const btn = document.getElementById('enter');
const input = document.getElementById('user_input');
const ul = document.querySelector('ul');


// dom event listeners
btn.addEventListener('click', function() {
    if(input.value.length > 0) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = '';
    }
});

