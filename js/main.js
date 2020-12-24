var userNameSignup = document.getElementById("signupName");
var userEmailSignup = document.getElementById("signupEmail");
var userPasswordSignup = document.getElementById("signupPassword");

var userEmailLogin = document.getElementById("signinEmail");
var userPasswordLogin = document.getElementById("signinPassword");

var name_pattern = /^(?=.{6,}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
var email_pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
var pass_pattern = /^(?=.*\d)(?=.*[a-zA-Z]).{4,8}$/;
var format = /[_.]/;



var usersContainer;

if (localStorage.getItem("users") == null) {
    usersContainer = [];
} else {
    usersContainer = JSON.parse(localStorage.getItem("users"));
}

function signup() {

    // if (userNameSignup.value != '' && userEmailSignup.value != '' && userPasswordSignup.value != '') {
    //     if(!name_pattern.test(userNameSignup.value )){
    //         if (userNameSignup.value.length < 6) {
    //             document.getElementById("invalid").innerHTML = 'User name must be at least 6 charachters';
    //             document.getElementById("something").innerHTML = '';
    //         }
    //         if (format.test(userNameSignup.value)) {
    //             document.getElementById("invalid").innerHTML = 'User name must not contain _ or .';
    //             document.getElementById("something").innerHTML = '';

    //         }
    //     }
    //     if (email_pattern.test(userEmailSignup.value)) {
    //         for (var i = 0; i < usersContainer.length; i++) {
    //             if (userEmailSignup.value == usersContainer[i].userEmail) {
    //                 document.getElementById("exist").innerHTML = 'Email is already exist';
    //                 document.getElementById("invalid").innerHTML = '';
    //                 document.getElementById("something").innerHTML = '';
    //             }
    //         }
    //     }
    //     if (!email_pattern.test(userEmailSignup.value)) {
    //         document.getElementById("exist").innerHTML = 'EX: example@example.com';
    //         document.getElementById("invalid").innerHTML = '';
    //         document.getElementById("something").innerHTML = '';

    //     }else {
    //         var user = {
    //             userName: userNameSignup.value,
    //             userEmail: userEmailSignup.value,
    //             userPassword: userPasswordSignup.value
    //         }

    //         usersContainer.push(user);
    //         localStorage.setItem("users", JSON.stringify(usersContainer));
    //         clearSignupForm();
    //         document.getElementById("invalid").innerHTML = '';
    //         document.getElementById("exist").innerHTML = '';
    //         document.getElementById("something").innerHTML = '';
    //     }


    // }
    if (userNameSignup.value == '' || userEmailSignup.value == '' || userPasswordSignup.value == '') {
        document.getElementById("something").innerHTML = 'All inputs are required'
    } else {
        var user = {
            userName: userNameSignup.value,
            userEmail: userEmailSignup.value,
            userPassword: userPasswordSignup.value
        }

        usersContainer.push(user);
        localStorage.setItem("users", JSON.stringify(usersContainer));
        clearSignupForm();
        document.getElementById("something").innerHTML = '';
        document.getElementById("exist").innerHTML = '';

    }


}



function login() {
    if (userEmailLogin.value == '' || userPasswordLogin.value == '') {
        document.getElementById("incorrect").innerHTML = 'All Inputs are required'
    } else {
        for (var i = 0; i < usersContainer.length; i++) {
            if (userEmailLogin.value == usersContainer[i].userEmail && userPasswordLogin.value == usersContainer[i].userPassword) {
                var link = document.getElementById("homeLink");
                link.setAttribute("href", "home.html");
                localStorage.setItem("userName", JSON.stringify(usersContainer[i].userName));
                document.getElementById("incorrect").innerHTML = '';
                break;
            } else {
                document.getElementById("incorrect").innerHTML = 'Incorrect Email or password'
            }

        }
    }

}

function logout() {
    localStorage.removeItem('userName');
}

function clearSignupForm() {
    userNameSignup.value = "",
        userEmailSignup.value = "",
        userPasswordSignup.value = ""
}

function clearLoginForm() {
    userEmailLogin.value = "",
        userPasswordLogin.value = ""
}