event.preventDefault();
function verification() {
    if (document.getElementById("login").value.length < 8) {
        alert("Attention : Votre login doit contenir 8 lettres au minimum !");
        return false;
    }
    else {
        return true;
    }
    var a = document.getElementById("pass").value;
    var b = document.getElementById("confirm_password").value;

    if (a != b) {
        alert("Les mots de passe ne correspondent pas.");
        return false;
    }
    else {
        alert("Les mots de passe correspondent.");
        return false;
    }

}