const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const ConfirmpasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit',  (event) =>{
    event.preventDefault();

    validateform();
});

function validateform(){
    //USERNAME
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'Name cannot be Empty');
    }else if(usernameInput.value.trim().length <5 || usernameInput.value.trim().length >15){
        setError(usernameInput, 'Name must be min 5 and max 15 characters');
    }else{
        setSuccess(usernameInput);
    }
   //EMAIL
   if(emailInput.value.trim()==''){
    setError(emailInput, 'Provide Email address');
}else if(isEmailvalid(emailInput.value)){
    setSuccess(emailInput);
}else{
    setError(emailInput, 'Provide valid email');
}
    //PASSWORD
if(passwordInput.value.trim()==''){
    setError(passwordInput, 'password cannot be Empty');
}else if(passwordInput.value.trim().length <6 || password.value.trim().length >12){
    setError(passwordInput, 'password must be min 5 and max 15 characters');
}else{
    setSuccess(passwordInput);
}
    //CONFIRM PASSWORD
if(ConfirmpasswordInput.value.trim()==''){
    setError(ConfirmpasswordInput, 'password cannot be Empty');
}else if(ConfirmpasswordInput.value !== passwordInput.value){
    setError(ConfirmpasswordInput, 'password does not match');
}else{
    setSuccess(ConfirmpasswordInput);
}
}
 
function setError(element, errorMessage){
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
function isEmailvalid(email){
    const reg= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}