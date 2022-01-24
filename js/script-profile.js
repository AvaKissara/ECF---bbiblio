var infoJury = [
    ["Anna-Lise Durine","analiz.durine@gmail.com", "jury", "Roman Français"],
    ["Ali Wood", "wilcometoaliwood@gmail.com", "jury", "Romain Etranger"],
    ["Allonzo Bargésoif", "soiffarddu06@gmail.com", "jury", "Biographie"],
    ["Jean Gross", "lapetitegraine@gmail.com", "jury", "Documentaire"],
    ["Leon Dit", "journalistedubigoudi@gmail.com", "jury", "Documentaire"],
];
var btnEnregistez = document.getElementById("enregistrez");
var nom = "";
var prenom = "";
var titreOeuvre = "";
var boxCategorie = "";
var categorieValue = "";
var radioMembre = "";
var profileMembre= "";
var x = 0;
var y = 0;
var comptUser = 25360;


//Récupère les valeurs text et email saisies par l'utilisateur et ajoute une nouvelle ligne remplie en conséquence dans la bdd.
function recupInfoPerso() {
    nom = document.getElementById("nom").value;
    prenom = document.getElementById("prenom").value;
    
    infoJury.push([nom, prenom, profileMembre]);
}

//Récupère la valeur de la checkbox sélectionnée par l'utilisateur
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


btnEnregistez.addEventListener("click", function() {
    recupInfoPerso();
    recupInfoCheckbox();
});