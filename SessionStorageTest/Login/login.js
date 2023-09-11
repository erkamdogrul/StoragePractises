document.getElementById("loginButton").addEventListener("click",function(){
    sessionStorage.setItem("storage_username",document.getElementById("username").value);
    window.location.href = "../UserInfo/userInfo.html";
});