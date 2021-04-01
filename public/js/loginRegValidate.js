var username = document.login_form.email;
var errorMessage = document.getElementById("error-message2");


var name_fun = () => {
    if (username.value == "") {
        errorMessage.innerText = "Please populate the email field";
        errorMessage.style.display = "block";
        return false;
    }
}

let validation = () => {

    name_fun();

}