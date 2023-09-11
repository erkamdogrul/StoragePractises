const phoneInput = document.getElementById('phone');
const loginButton = document.getElementById('submitButton');

loginButton.addEventListener("click", function (event) {
    localStorage.setItem("phoneNumber", phoneInput.value);
    window.location.href = "../UserInfo/userInfo.html";
});







