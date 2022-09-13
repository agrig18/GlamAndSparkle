document.addEventListener("DOMContentLoaded", function () {
  if (sessionStorage.getItem("currentUser") != null) {
    document.getElementById("login-form").style.position = "absolute";
    document.getElementById("login-form").style.left = "-9999px";
    displayUserAccountInfo();
  }

  var logout_btn = document.getElementsByClassName("logout-button")[0];
  console.log(logout_btn);

  logout_btn.addEventListener("click", function (event) {
    event.preventDefault();
    sessionStorage.clear();
    window.location.href = "main.html";
  });

  function displayUserAccountInfo() {
    document.getElementById("account-form").style.visibility = "visible";
    var user = JSON.parse(sessionStorage.getItem("currentUser"));
    console.log("user", user);

    for (const [key, value] of Object.entries(user)) {
      console.log(key);
      var element = document.getElementsByClassName(key)[0];
      console.log("ELEMENT", element);
      var tag = document.createElement("span");
      tag.innerHTML = value;
      if (element != null) {
        element.appendChild(tag);
      }
    }
  }

  if (localStorage.getItem("users") == null) {
    var users = new Array();
    localStorage.setItem("users", JSON.stringify(users));
  }

  users = JSON.parse(localStorage.getItem("users"));
  console.log("users", users);

  function Login(users) {
    if (sessionStorage.getItem("currentUser") != null) {
      alert("Already logged in!");
      return;
    }
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    for (let i = 0; i < users.length; i++) {
      let curUser = users[i];
      console.log("curUser", curUser);
      if (curUser.email == email) {
        if (atob(curUser.password) == password) {
          sessionStorage.setItem("currentUser", JSON.stringify(curUser));
          alert("Logged in successfully!");
          //   window.location.href = "./main.html";
        } else {
          alert("Password was incorrect!");
        }
        return;
      }
    }
    alert("No such user exists!");
  }

  let login_form = document.getElementById("login-form");
  login_form.addEventListener("submit", function (event) {
    event.preventDefault();
    Login(users);
    window.location.href = "main.html";
  });
});
