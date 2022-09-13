document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("users") == null) {
    var users = new Array();
    localStorage.setItem("users", JSON.stringify(users));
  }

  users = JSON.parse(localStorage.getItem("users"));

  function Register(users) {
    if (sessionStorage.getItem("currentUser") != null) {
      alert("Account alrady created!");
      return;
    }

    var firstname = document.getElementById("first_name").value;
    var lastname = document.getElementById("last_name").value;
    var telephone = document.getElementById("tel").value;
    var email = document.getElementById("email").value;

    var day = document.getElementById("birthday-day");
    var bday = day.options[day.selectedIndex].value;
    var month = document.getElementById("birthday-month");
    var bmonth = month.options[month.selectedIndex].value;
    var year = document.getElementById("birthday-year");
    var byear = year.options[year.selectedIndex].value;

    var date = "" + bday + " " + bmonth + " " + byear;

    var password = document.getElementById("password").value;

    for (let i = 0; i < users.length; i++) {
      let curUser = users[i];
      if (curUser.email == email) {
        alert("Email is not valid!");
        return;
      }
    }

    let user = {
      first_name: firstname,
      last_name: lastname,
      tel: telephone,
      birth_date: date,
      email: email,
      password: btoa(password),
    };

    // console.log("user", user);

    sessionStorage.setItem("currentUser", JSON.stringify(user));
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    window.location.replace("login.html");
  }

  let register_form = document.getElementById("register-form");
  register_form.addEventListener("submit", function (event) {
    event.preventDefault();
    Register(users);
  });
});
