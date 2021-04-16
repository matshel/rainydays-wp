const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const messageSent = document.querySelector("#messageSent");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const button = document.querySelector(".btn-contact-form");


function checkForm() {

    if(firstName.value.trim().length < 2) {
        firstNameError.style.display = "block";
    }else {
        firstNameError.style.display = "none";
    }
    if(lastName.value.trim().length < 2) {
        lastNameError.style.display = "block";
    }else {
        lastNameError.style.display = "none";
    }
    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if(subject.value.trim().length < 1) {
        subjectError.style.display = "block";
    }else {
        subjectError.style.display = "none";
    }
}

checkForm();

function checkIfButtonIsDisabled() {
    if (checkLength(firstName.value, 2) && checkLength(lastName.value, 2) && validateEmail(email.value) && checkLength(subject.value, 1)) {
        button.disabled = false;
    } else {
        messageSent.innerHTML = "";
        button.disabled = true;
    }
}


firstName.addEventListener("keyup", checkIfButtonIsDisabled);
lastName.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);
subject.addEventListener("keyup", checkIfButtonIsDisabled);


form.addEventListener("submit", submitForm); 


function submitForm(event) {
    event.preventDefault();
    messageSent.innerHTML = '<div class="message">Your message has been sent!</div>';
    form.reset();
}

// timeout token 

let TimeoutToken = 0;

window.onload = () => {
    firstName.onkeyup = (event) => {

        clearTimeout(TimeoutToken);

        if (firstName.value.trim().length === 0) { 
            firstNameError.style.display = "block"; 
            return;
        }

        TimeoutToken = setTimeout(() => {
            checkForm(firstName.value);
        }, 250);
        
    };
    
    lastName.onkeyup = (event) => {

        clearTimeout(TimeoutToken);

        if (lastName.value.trim().length === 0) { 
        lastNameError.style.display = "block"; 
            return;
        }

        TimeoutToken = setTimeout(() => {
            checkForm(lastName.value);
        }, 250);
        
    };

    email.onkeyup = (event) => {

        clearTimeout(TimeoutToken);

        if (email.value.trim().length === 0) { 
        emailError.style.display = "block"; 
            return;
        }

        TimeoutToken = setTimeout(() => {
            checkForm(email.value);
        }, 250);
        
    };

    subject.onkeyup = (event) => {

        clearTimeout(TimeoutToken);

        if (subject.value.trim().length === 0) { 
        subjectError.style.display = "block";
            return;
        }

        TimeoutToken = setTimeout(() => {
            checkForm(subject.value);
        }, 250);
        
    };
}


function validateEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // need to add white-space check somehow : /^[^ ][\w\W ]*[^ ]/
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}
