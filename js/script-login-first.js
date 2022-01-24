//Ce script permet de gérer la première connexion suite à l'inscription.

//BDD
var infoJury = [
    ["Anna-Lise Durine","analiz.durine@gmail.com", 25361, "jury", "Roman Français"],
    ["Ali Wood", "wilcometoaliwood@gmail.com", 25362, "jury", "Romain Etranger"],
    ["Allonzo Bargésoif", "soiffarddu06@gmail.com", 25363, "jury", "Biographie"],
    ["Jean Gross", "lapetitegraine@gmail.com", 25364, "jury", "Documentaire", "Biographie"],
    ["Leon Dit", "journalistedubigoudi@gmail.com", 25365, "jury", "Documentaire"],
    ["Bakounine", "anardeshiste@gmail.com", 25366, "auteur", "Roman Etranger"]
];

var btnLoguez = document.getElementById("loguez");
var btnfirstConnexion = document.getElementById("first-connexion");
var loginSaisie = "";
var passwordSaisie = "";
var newPassword = "";

//Récupère les valeurs text saisies par l'utilisateur et ajoute une nouvelle ligne remplie en conséquence dans la bdd.
//Demande à l'utisateur de changer le password et met à jour la bdd.
function modifyPassword() {
    loginSaisie = document.getElementById("pseudo").value;
    passwordSaisie = document.getElementById("pass").value;

    for (i=0; i<infoJury.length; i++)
    {
        if (loginSaisie == infoJury[i][0] && passwordSaisie == infoJury[i][2])
        {
            newPassword = prompt("Définir votre Password");      
            infoJury[i].splice(2, 1, newPassword);
        }
    }
}

//Récupère le login et le password saisis. Vérifie si ils correspondent à une entrée dans la bdd.
//Si c'est le cas redirige vers la page de login générale. 
function validerRediriger() {
    loginSaisie = document.getElementById("pseudo").value;
    passwordSaisie = document.getElementById("pass").value;

    for (i=0; i<infoJury.length; i++)
    {
        if (loginSaisie == infoJury[i][0] || passwordSaisie == infoJury[i][2]) // "&&" Ne fonctionne pas ici (pb portee modif array infoJury)
        {

            window.open("login.html"); //"window.location.href" ne fonctionne pas
        }
    }
}

btnfirstConnexion.addEventListener("click", function() {
    modifyPassword();
    validerRediriger(); 
})