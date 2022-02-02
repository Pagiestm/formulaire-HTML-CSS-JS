event.preventDefault();
function verification() {
    if (document.getElementById("login").value.length < 8) {
        alert("Attention : Votre login doit contenir 8 lettres au minimum !");
        return false;
    }
}

function verification(){
    if (document.getElementById("pass").value != document.getElementById("confirm_password").value) {
        alert("Les mots de passe ne correspondent pas");
        return true;
    }
    else {
        return false;
    }
}

function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function verification() {
    var email = document.getElementById("email").value;

    if (checkEmail(email)) {
        return true;
    }
    else{
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