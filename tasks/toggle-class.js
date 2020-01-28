// Create a script to toggle the DOM element’s class “active” by clicking.

const root = document.querySelector('#root');

root.innerHTML = `
<div id="some" class="one"></div>
`
const someBox = document.querySelector('#some');


function toggleClass() {
    someBox.classList.toggle('two');
}

setInterval(() => toggleClass(), 300);