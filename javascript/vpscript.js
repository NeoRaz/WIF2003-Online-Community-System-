const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const occupationInput = document.querySelector('#occupation');
const contactInput = document.querySelector('#contact');
const purposeInput = document.querySelector('#purpose');


form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function validateForm() {
    
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'Name can not be empty');
    }else if(usernameInput.value.trim().length <3 || usernameInput.value.trim().length > 100){
        setError(usernameInput, 'Name must between 3 and max 100 charecters');
    }else {
        setSuccess(usernameInput);
    }
    
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Email cannot be empty');
    }else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
    }else{
        setError(emailInput, 'Please enter a valid email');
    }

    if(occupationInput.value.trim()==''){
        setError(occupationInput, 'Occupation cannot be empty');
    }else {
        setSuccess(occupationInput);
    }

    if(contactInput.value.trim()==''){
        setError(contactInput, 'Contact no. cannot be empty');
    }else if(isContactValid(contactInput.value)){
        setSuccess(contactInput);
    }else {
        setError(contactInput,"Please enter a valid 10 digit contact no.");
    }

    if(purposeInput.value.trim()==''){
        setError(purposeInput, 'Purpose of visit cannot be empty');
    }else if(purposeInput.value.trim().length <5 || purposeInput.value.trim().length > 100){
        setError(purposeInput, 'Enter your purpose within 5 to 100 characters ');
    }else {
        setSuccess(purposeInput);
    }
    
function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}
function isContactValid(contactInput){
    var reg = /^[0-9]\d{9}$/i;
    return reg.test(contactInput);
}

}