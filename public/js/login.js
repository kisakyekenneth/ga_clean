const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('success') && urlParams.get('success')) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerText = `${message}`;
    errorMessage.style.display = "block";
}