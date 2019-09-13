function validate() {
    var un = document.getElementById("username").value;
    if (un == "") {
        alert("Username can not be empty.");
        return false;
    }

    var password = document.getElementById("password").value;
    if (password == "") {
        alert("Password cannot be empty");
        return false
    } else if (password.length < 8) {
        alert("The password must be more than 8 character");
        return false;
    }
    return true;
}