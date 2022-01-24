var infoJury = [
    ["Anna-Lise Durine","analiz.durine@gmail.com", 25361, "jury", "Roman Français"],
    ["Ali Wood", "wilcometoaliwood@gmail.com", 25362, "jury", "Romain Etranger"],
    ["Allonzo Bargésoif", "soiffarddu06@gmail.com", 25363, "jury", "Biographie"],
    ["Jean Gross", "lapetitegraine@gmail.com", 25364, "jury", "Documentaire", "Biographie"],
    ["Leon Dit", "journalistedubigoudi@gmail.com", 25365, "jury", "Documentaire"],
];
var btnLoguez = document.getElementById("loguez");
var loginSaisie = "";
var passwordSaisie = "";


btnfirstConnexion.addEventListener("click", function() {
    loginSaisie = document.getElementById("pseudo").value;
    passwordSaisie = document.getElementById("pass").value;
    console.log(passwordSaisie);
    
    for (i=0; i<infoJury.length; i++)
    {
        if (loginSaisie == infoJury[i][0] && passwordSaisie == infoJury[i][2])
        {
            window.location.href="1er.html";
        }
        
    }
})