function validate() {
    var un = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (un == "" || password == "") {
        alert("This field cannot be empty!");
        return false;
    } else if (un != "adminWSC" && password != "Squad3Dev") {
        alert("User cannot be found. Please try again or check your credentials again.");
        return false;
    }
    return true;
}