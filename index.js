const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('button');
const forma = document.getElementById('form');
const firstNameError = document.querySelector('.firstNameErrorImg');
const lastNameError = document.querySelector('.lastNameErrorImg');
const emailError = document.querySelector('.emailErrorImg');
const passwordError = document.querySelector('.passwordErrorImg');
// const errorMessage = document.querySelector('.errorMsg');



const error = (element, message) => {
    const inputControl = element.parentElement;
    const errorMessage = inputControl.querySelector('.errorMsg');
    //kai buvau nurodžius "document.querySelector", man įdėdavo tik vieną komentarą.
    //reikia nurodyti tėvinį elementą, prie kurio bus tas komentaras
    errorMessage.innerText = message;
    // element.style.border = "solid red 3px"
    element.classList.add('error');
    element.classList.remove('success');


    console.log(element)
}


const success = element => {
    const inputControl = element.parentElement;
    const errorMessage = inputControl.querySelector('.errorMsg');
    errorMessage.innerText = '';
    element.classList.add('success');
    element.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validation = () => {

    // finding value of input fields, "trim" removes all the white spaces that string have 
    // console.log(firstName.parentElement)

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === '') {
        error(firstName, 'First name cannot be empty');
        firstNameError.style.visibility = "visible";
    } else {
        success(firstName);
        firstNameError.style.visibility = "hidden";
    }

    if (lastNameValue === '') {
        error(lastName, 'Last Name cannot be empty');
        lastNameError.style.visibility = "visible";
    } else {
        success(lastName);
        lastNameError.style.visibility = "hidden";
    }
    if (emailValue === '') {
        error(email, 'Email cannot be empty');
        emailError.style.visibility = "visible";
    } else if (!isValidEmail(emailValue)) {
        error(email, 'Looks like this is not an email');
        emailError.style.visibility = "visible";
    } else {
        success(email);
        emailError.style.visibility = "hidden";
    }
    if (passwordValue === '') {
        error(password, 'Password cannot be empty');
        passwordError.style.visibility = "visible";
    } else if (passwordValue.length < 8) {
        error(password, 'Password is too short');
        passwordError.style.visibility = "visible";
    } else {
        success(password);
        passwordError.style.visibility = "hidden";
    }
}


forma.addEventListener('submit', e => {
    e.preventDefault();
    validation();




})