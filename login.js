document.addEventListener("DOMContentLoaded", function(){

    if(window.localStorage.getItem("all_users") == null){
        var users = new Array();
        window.localStorage.setItem("all_users", JSON.stringify(users));
    }

    allUsers = JSON.parse((localStorage.getItem("all_users")));

    function Login(allUsers){
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        for (let i = 0; i < allUsers.length; i++) {
            let curUser = allUsers[i];
            if(curUser.email == email){
                if(atob(curUser.password) == password){
                    sessionStorage.setItem("currentUser", curUser);
                    alert("Logged in successfully!")
                }else{
                    alert("Password was incorrect!")
                }
                return;
            }
        }
        alert("No such user exists!");
    }

    let login_btn = document.querySelector('.login-button');
    login_btn.addEventListener('click',function(event){
        Login(allUsers);
        event.preventDefault();
    });




})