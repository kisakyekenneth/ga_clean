const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

const username = document.userRegister.username;

const email = document.userRegister.email;

const password = document.userRegister.password;

const display = document.getElementById('error-msg')

let registerValidator = () => {     
    
     if (username.value == "") {
         display.style.color = 'red'
         display.innerHTML = 'Please fill all the inputs'
         username.style.border = '1px solid red'
         
         username.focus();
         
         return false;
     }
    if (username.value != "") {
         username.style.border = '1px solid #eee'
    }
     if (email.value == "") {
         display.style.color = 'red'
         display.innerHTML = 'Please fill all the inputs'
         
         email.style.border = '1px solid red'
         email.focus();
         
         return false;
    }
    if (password.value == "") {
         display.style.color = 'red'
         display.innerHTML = 'Please fill all the inputs'
         
         password.style.border = '1px solid red'
         password.focus();
         
         return false;
     }
     
 }
