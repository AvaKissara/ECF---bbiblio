var infoLivre = [
    ["Dieu et l'Etat", "Mikhail Alexandrovitch", "Bakounine", "Roman Etranger"],
    ["L'Assomoir", "Emile", "Zola", "Roman Français"],
    ["Capitalisme, désir et servitude", "Frédéric", "Lordon", "Roman Français"],
    ["Le Temps des Tempêtes", "Nicolas", "Sarkozy", "Biographie"],
    ["Utopia", "Thomas", "Moore", "Roman Etranger"],
    ["Revolucion", "Emmanuel", "Macron", "Roman Français"],
];
var infoAuteur = [
    ["Mikhail Alexandrovitch", "Bakounine", "Roman Etranger"],
    ["Emile", "Zola", "Roman Français"],
    ["Frédéric", "Lordon", "Roman Français"],
    ["Nicolas", "Sarkozy", "Biographie"],
    ["Thomas", "Moore", "Roman Etranger"],
    ["Emmanuel", "Macron", "Roman Français"],
];
var infoJury = [
    ["Anna-Lise Durine","analiz.durine@gmail.com", "jury", "Roman Français"],
    ["Ali Wood", "wilcometoaliwood@gmail.com", "jury", "Romain Etranger"],
    ["Allonzo Bargésoif", "soiffarddu06@gmail.com", "jury", "Biographie"],
    ["Jean Gross", "lapetitegraine@gmail.com", "jury", "Documentaire"],
    ["Leon Dit", "journalistedubigoudi@gmail.com", "jury", "Documentaire"],
];
var btnEnregistez = document.getElementById("enregistrez");
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
// var url = window.location.search;
// var urlParams = new URLSearchParams(url);

//Récupère les valeurs des input texte
function recupInfoPerso() {
    pseudoInscription = document.getElementById("nom").value;
    emailInscritpion = document.getElementById("email").value;
    
    infoJury.push([pseudoInscription, emailInscritpion, profileMembre]);
    // console.log(infoAuteur);
    // alert(urlParams.get("titre-oeuvre"));
    return infoJury;
}
console.log(infoJury);

//Récupère la valeur de la checkbox sélectionnée
function recupInfoCheckbox() {  
    boxCategorie = document.getElementsByName("categorie");
    
    for (i=0; i<boxCategorie.length; i++)
    {
        if (boxCategorie[i].checked)
        {         
            categorieValue = boxCategorie[i].value;

            y = infoJury.length-1;
            x = infoJury[y].length;
            console.log(infoJury[y][x]);

            infoJury[y][x] = categorieValue;
            console.log(infoJury[y]);
        }
    }   
}

function afficher() {  
    for (i=0; i<infoJury.length; i++) 
    {
        comptUser++;
        infoJury[i].splice(2, 0, comptUser);       
    }
    alert("*A recevoir par email* \nLogin: " + pseudoInscription + "\nPassword: " + comptUser);
}

//Récupère les valeurs saisies dans le formulaire
btnInscrivez.addEventListener("click", function() {
    recupInfoPerso();
    recupInfoCheckbox();
    afficher();
});

btnLoguez.addEventListener("click", function() {
    window.location.href="login.html";
});