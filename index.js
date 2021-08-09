
let currentButton;
let val;
let newButton; 
const firstButton = document.querySelector('.first-button');
const resetButton = document.querySelector('.reset')
const body = document.querySelector('body')

firstButton.addEventListener('click', addNewButton)
resetButton.addEventListener('click', clearAllButtons)

function addNewButton(e) {
    currentButton = e.target; 
    val = parseInt(currentButton.innerHTML, 10); 
    val++; 
    currentButton.innerHTML = val;
    newButton = document.createElement('button')
    newButton.className = 'new-button'
    newButton.innerHTML = 0; 
    body.appendChild(newButton)
    newButton.addEventListener('click', addNewButton)
}

function clearAllButtons() {
   const allButtons = document.querySelectorAll('.new-button') 
   allButtons.forEach(button => {
       button.style.display = 'none';
   })

   firstButton.innerHTML = 0; 
}