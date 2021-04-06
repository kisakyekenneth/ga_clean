const loginBtn = document.getElementById('logIn');
const errorMessage = document.getElementById("error-message2");
const usernam = document.getElementById("useremail")

loginBtn.addEventListener('click', () => {
    if (usernam.value == "") {

        errorMessage.innerText = "Please populate the email field";
        errorMessage.style.display = "block";
        return false;
    }
})