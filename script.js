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
    var email = document.getElementById("email").value;
    if (((email.endsWith(".com")) || email.endsWith(".fr")) || email.endsWith(".net")) {
        return true;
    }
    else {
        alert('Adresse e-mail non valide');
        return false;
    }
}
function check() {
    CheckBox = document.getElementById("checkbox");
    if (CheckBox.checked) {
        document.getElementById("choisir").style.display = "block";
    }
    else {
        document.getElementById("choisir").style.display = "none";
    }
}