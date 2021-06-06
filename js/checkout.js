const form = document.querySelector("#checkoutForm");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const ccnumber = document.querySelector("#ccnumber");
const ccnumberError = document.querySelector("#ccnumberError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const cardholder = document.querySelector("#cardholder");
const cardholderError = document.querySelector("#cardholderError");
const date = document.querySelector("#date");
const dateError = document.querySelector("#dateError");
const cvccode = document.querySelector("#cvccode");
const cvccodeError = document.querySelector("#cvccodeError");
const button = document.querySelector(".btn-checkout-form");


function validateForm(event) {
    event.preventDefault(); 

    if (validateName(fullName.value) === true) {
        fullNameError.style.display = "none"; 
    } else {
        fullNameError.style.display = "block"; 
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(address.value, 24) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (checkLength(ccnumber.value, 15) === true) {
        ccnumberError.style.display = "none";
    } else {
        ccnumberError.style.display = "block";
    }

    if (validateName(cardholder.value) === true) {
        cardholderError.style.display = "none"; 
    } else {
        cardholderError.style.display = "block"; 
    }

    if (checkLengthEqual(date.value, 4) === true) {
        dateError.style.display = "none";
    } else {
        dateError.style.display = "block";
    }

    if (checkLengthEqual(cvccode.value, 3) === true) {
        cvcCodeError.style.display = "none";
    } else {
        cvcCodeError.style.display = "block";
    }

    if (validateName(fullName.value, 4) === true && validateEmail(email.value) === true && checkLength(address.value, 25) && checkLength(ccnumber.value, 15) === true && validateName(cardholder.value) === true && checkLengthEqual(date.value, 4) && checkLengthEqual(cvccode.value, 3)) {
        form.reset(); // resets form
        goTo(); 
}
}


form.addEventListener("submit", validateForm); 


// function that checks exact length
function checkLengthEqual(value, len) { 
    if (value.trim().length === len) {
        return true;
    } else {
        return false;
    }
}

// function that validates email address
function validateEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
// function that validates full name
function validateName(fullName) {
    const regEx = /^[a-z\u00C0-\u02AB'´`]{2,}\.?\s([a-z\u00C0-\u02AB'´`]{2,}\.?\s?)+$/i;
    const patternMatches = regEx.test(fullName);
    return patternMatches;
}

// this function checks if the length is meeting the required length set by len
function checkLength(value, len) { 
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}


function goTo() {
    location.href = "checkout-success.html";
}