
let currentButton;
let val;
let newButton; 
let allButtons; 
let groupToggle = false; 
let currentVal; 
let newGroupButton;
const buttonObject = {};
const buttonList = [];
const firstButton = document.querySelector('.first-button');
const resetButton = document.querySelector('.reset')
const groupButton = document.querySelector('.group-button')
const body = document.querySelector('body')

firstButton.addEventListener('click', addNewButton)
resetButton.addEventListener('click', clearAllButtons)
// groupButton.innerHTML = 'GROUP';
groupButton.addEventListener('click', groupButtons)

function addNewButton(e) {
    currentButton = e.target; 
    val = parseInt(currentButton.innerHTML, 10); 
    val++; 
    currentButton.innerHTML = val;
    currentButton.setAttribute('data-cell-value', val);

    newButton = document.createElement('button')
    newButton.className = 'new-button'
    newButton.setAttribute('data-cell-value', 0);
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



function groupButtons() {
    if(groupToggle == false) {
       allButtons = document.querySelectorAll('button');
       allButtons.forEach(button => {
        if(button.className != 'reset' && button.className != 'group-button') {
             currentVal = parseInt(button.getAttribute('data-cell-value'), 10)
            if(buttonObject[currentVal]) {
              let val = buttonObject[currentVal];
              val++; 
              buttonObject[currentVal] = val;
            } else {
              buttonObject[currentVal] = 1; 
            }
             buttonList.push(currentVal)
             button.style.display = 'none';
        }

    })

      for(const button in buttonObject) {
        newGroupButton = document.createElement('button');
        newGroupButton.className = 'new-group-button';
        newGroupButton.setAttribute('data-group-amount', buttonObject[button]);
        newGroupButton.innerHTML = button;
        body.appendChild(newGroupButton)
        groupToggle = true; 
        groupButton.innerHTML = 'UNGROUP';
      } 
    } else {
      for(let i = 0; i < buttonList.length; i++) {
        newButton = document.createElement('button');
        if(i == 0) {
          newButton.className = 'first-button';
        } else {
          newButton.className = 'new-button';
        }
        newButton.innerHTML = button; 
        body.appendChild(newButton);

      }
      groupToggle = false; 
      groupButton.innerHTML = 'GROUP';
    }
}

