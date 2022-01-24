var infoJury = [
    ["Anna-Lise Durine","analiz.durine@gmail.com", "jury", "Roman Français"],
    ["Ali Wood", "wilcometoaliwood@gmail.com", "jury", "Romain Etranger"],
    ["Allonzo Bargésoif", "soiffarddu06@gmail.com", "jury", "Biographie"],
    ["Jean Gross", "lapetitegraine@gmail.com", "jury", "Documentaire"],
    ["Leon Dit", "journalistedubigoudi@gmail.com", "jury", "Documentaire"],
];
var btnInscrivez = document.getElementById("inscrivez");
var btnLoguez = document.getElementById("loguez");
var nomAuteur = "";
var prenomAuteur = "";
var titreOeuvre = "";
var boxCategorie = "";
var categorieValue = "";
var radioMembre = "";
var profileMembre= "";
var x = 0;
var y = 0;
var comptUser = 25360;


// //Récupère la valeur du bouton radio sélectionné
function recupInfoRadio() {
    radioMembre = document.getElementsByName("membre");
    

    for (i=0; i<radioMembre.length; i++)
    {
        if (radioMembre[i].checked)
        {
            profileMembre = radioMembre[i].value;
        }
    }
}

//Récupère les valeurs des input texte
function recupInfoPerso() {
    pseudoInscription = document.getElementById("pseudo").value;
    emailInscritpion = document.getElementById("email").value;
    
    infoJury.push([pseudoInscription, emailInscritpion, profileMembre]);
}

function afficher() {  
    for (i=0; i<infoJury.length; i++) 
    {
        comptUser++;
        infoJury[i].splice(2, 0, comptUser);       
    }
    alert("*A recevoir par email* \nLogin: " + pseudoInscription + "\nPassword: " + comptUser);
    window.open("login.html");
}

//Récupère les valeurs saisies dans le formulaire
btnInscrivez.addEventListener("click", function() {
    recupInfoRadio();
    recupInfoPerso();
    // recupInfoCheckbox();
    afficher();
    console.table(infoJury);
    alert(infoJury);
});