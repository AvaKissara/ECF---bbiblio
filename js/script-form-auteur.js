//Ce script permet de d'enregistrer une oeuvre pour concourir

//BDD
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

var btnCandidatez = document.getElementById("candidatez");
var nomAuteur = "";
var prenomAuteur = "";
var titreOeuvre = "";
var boxCategorie = "";
var categorieValue = "";

//Récupère les valeurs des input saisis par l'utilisateur
function recupInfoPerso() {
    nomAuteur = document.getElementById("nom").value;
    prenomAuteur = document.getElementById("prenom").value;
    titreOeuvre = document.getElementById("titre-oeuvre").value;
    
    infoAuteur.push([prenomAuteur, nomAuteur, categorieValue]);
    infoLivre.push([titreOeuvre, prenomAuteur, nomAuteur, categorieValue]);
}

//Récupère la valeur du bouton radio sélectionné par l'utilisateur
function recupInfoRadio() {
    boxCategorie = document.getElementsByName("categorie");
    
    for (i=0; i<boxCategorie.length; i++)
    {
        if (boxCategorie[i].checked)
        {
            
            categorieValue = boxCategorie[i].value;
        }
    }
}

//Récupère les valeurs saisies dans le formulaire pour mettre la bdd à jour.
btnCandidatez.addEventListener("click", function() {   
    recupInfoRadio();
    recupInfoPerso();
});

