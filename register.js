document.addEventListener("DOMContentLoaded", function(){

    if(window.localStorage.getItem("all_users") == null){
        var users = new Array();
        window.localStorage.setItem("all_users", JSON.stringify(users));
    }

    allUsers = JSON.parse((localStorage.getItem("all_users")));

    function Register(allUsers){
        var firstname = document.getElementById("first_name").value;
        var lastname = document.getElementById("last_name").value;
        var telephone = document.getElementById("tel").value;
        var email = document.getElementById("email").value;

        var day = document.getElementById("birthday_day");
        var bday = day.options[day.selectedIndex].text;
        var month = document.getElementById("birthday_month");
        var bmonth = month.options[month.selectedIndex].text;
        var year = document.getElementById("birthday_year");
        var byear = year.options[year.selectedIndex].text;
        
        var date = "" + bday + " " + bmonth + ", " + byear;

        var password = document.getElementById("password").value;
    
        for (let i = 0; i < allUsers.length; i++) {
            let curUser = allUsers[i];
            if(curUser.email == email){
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
            password: btoa(password)
        };

        sessionStorage.setItem("currentUser", user);
        allUsers.push(user);
        localStorage.setItem('all_users', JSON.stringify(allUsers));
    }

    let register_btn = document.querySelector('.register-button');
    register_btn.addEventListener('click',function(event){
        Register(allUsers);
        event.preventDefault();
    });

})