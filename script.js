// Toggle Menu Section
const MenuBtn = document.getElementById('MenuBtn')
const Menu = document.getElementById('Menu')

MenuBtn.addEventListener('click', function () {
    if (Menu.style.display === 'none') {
        Menu.style.display = 'block';
    } else {
        Menu.style.display = 'none';
    }
});

// Show Alert Section
const AlertBtn = document.getElementById('AlertBtn')

AlertBtn.addEventListener('click', function() {
    alert('ALERT!!! Javascript Project 1 SHOW ALERT!!');
});

// Increment/Decrement Counter Section
const IncrementBtn = document.getElementById('IncrementBtn')
const DecrementBtn = document.getElementById('DecrementBtn')
const counterDisplay = document.getElementById('counter')

let counter = 0;

IncrementBtn.addEventListener('click',function() {
    counter +=1;
    counterDisplay.textContent = counter;
});

DecrementBtn.addEventListener('click', function() {
    counter -=1;
    counterDisplay.textContent = counter;
});

// Reset Button Section
const ResetBtn = document.getElementById('ResetBtn')

ResetBtn.addEventListener('click', function() {
    location.reload();
});

// Name Input / Greeting Section
const userInput = document.getElementById('username')
const GreetBtn = document.getElementById('GreetBtn')
const GreetMsg = document.getElementById('GreetMsg')

function isValidName(name) {
    const namePattern = /^[a-zA-Z\s]+$/;
    return namePattern.test(name);
}

GreetBtn.addEventListener('click', function() {
    const username = userInput.value.trim();
    
    if (username === ' '){
        GreetMsg.textContent = 'Please Enter Your Name';
    }else if (!isValidName(username)) {
        GreetMsg.textContent = 'Invalid Input, Please only use letters.';
    }else {
        GreetMsg.textContent = `Hello, ${username}!`;
    }
});

