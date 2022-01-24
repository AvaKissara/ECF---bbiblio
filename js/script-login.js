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


function validerRediriger() {
    loginSaisie = document.getElementById("pseudo").value;
    passwordSaisie = document.getElementById("pass").value;

    for (i=0; i<infoJury.length; i++)
    {
        if (loginSaisie == infoJury[i][0] || passwordSaisie == infoJury[i][2]) // "&&" Ne fonctionne pas ici (pb portee modif array infoJury)
        {
            if (infoJury[i][3] == "jury")
            {
                window.open("acces-jury.html"); //"window.location.href" ne fonctionne pas
            }
            else
            {
                window.open("acces-auteur.html"); //"window.location.href" ne fonctionne pas
            }
        }
        
    }
}

btnLoguez.addEventListener("click", function() {
    validerRediriger();
});