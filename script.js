event.preventDefault();
function verification() {
    if (document.getElementById("login").value.length < 8) {
        alert("Attention : Votre login doit contenir 8 lettres au minimum !");
        return false;
    }
    if (document.getElementById("pass").value != document.getElementById("confirm_password").value) {
        alert("Les mots de passe ne correspondent pas");
        return false;
    }
    else {
        return true;
    }
}