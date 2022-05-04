const contactForm = document.querySelector("#contact-form");

const fullName = document.querySelector("#fullname");
const fullNameError = document.querySelector("#full-name-error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");

const messageField = document.querySelector("#message")
const messageError = document.querySelector("#message-error")

const message = document.querySelector(".validation-message")

function validateForm(event) {
    event.preventDefault();

    if (checkLength(fullName.value, 4)) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "inline";
    }

    if (checkEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "inline";
    }

    if (checkLength(subject.value, 14)) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "inline";
    }

    if (checkLength(messageField.value, 24)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "inline";
    }

    if (checkLength(fullName.value, 4) && checkLength(messageField.value, 24) && checkEmail(email.value) && checkLength(subject.value, 14)) {
        message.innerHTML += `Thanks for reaching out. I will do my very best to get back to you ASAP`;
    } else {
        return;
    }

    contactForm.reset();
}

contactForm.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function checkEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email);
    return patternMatch;
}
