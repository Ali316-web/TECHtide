// let para = document.querySelector('p').textContent;
// let element = document.querySelectorAll('.para');
// let head = document.getElementById('head');
// console.log('head')
// let para = document.getElementsByClassName('para');
// let element = document.getElementsByTagName('p');

function submits() {
    let name = document.getElementById('name').value;
    let num = document.getElementById('number').value;
    let pass = document.getElementById('pass').value;
    let email = document.getElementById('email').value;

    localStorage.setItem('name', name);
    localStorage.setItem('number', num);
    localStorage.setItem('password', pass);
    localStorage.setItem('email', email);
    // localStorage.removeItem('number');
    // localStorage.getItemItem('number');
    // localStorage.key(1);
    // localStorage.clear('number');

    let nameRegex = /^[a-zA-Z]+$/;

    let numRegex = /^(\d[4])-(\d[7])+$/;

    let passRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_-])[a-zA-Z\d!@#$%^&*_-]{8,20}$/

    let emailRegex = /^[a-z] (?=.*[0-200]) (?=.*[!@#$%^&*_]) [a-z!@#$%^&*_]{1-20}$/

    if (!nameRegex.test(name)) {
        document.getElementById('nameError').textContent = 'please enter valid input'
    }
    else {   
        alert('Data Submitted')
    }

    if (!numRegex.test(number)) {
        document.getElementById('numError').textContent = 'please enter valid input'
    }
    else {
        alert('Data Submitted')
    }

    if (!passRegex.test(password)) {
        document.getElementById('passError').textContent = 'please enter valid input'
    }
    else {
        alert('Data Submitted')
    }

    if (!emailRegex.test(email)){
        document.getElementById(emailError).textContent = 'please enter valid input'
    }
    else{
        alert('Data Submitted')
    }



}