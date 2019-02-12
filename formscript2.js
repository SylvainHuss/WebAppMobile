var nom = document.getElementById("fNom");
var infonom = document.getElementById("infonom");
var prenom = document.getElementById("fPrenom");
var infoprenom = document.getElementById("infoprenom");
var age = document.getElementById("fAge");
var infoage = document.getElementById("infoage");
var h = document.getElementById("Homme");
var f = document.getElementById("Femme");
var nb = document.getElementById("NB");
var infosexe = document.getElementById("infosexe");
var mdp = document.getElementById("fMdp");
var infomdp = document.getElementById("infomdp");
var mdp = document.getElementById("fMdp");
var confirm = document.getElementById("fConfirm");
var infoconfirm = document.getElementById("infoconfirm");
var pays = document.getElementById("fPays");
var infopays = document.getElementById("infopays");

function nomupdate(){
    if (nom.value.length < 3){
        infonom.textContent = "La longueur du nom doit etre d'au moins 3 caracteres";
    }
    else { infonom.textContent = "";}
}

function prenomupdate(){
    if (prenom.value.length < 3){
        infoprenom.textContent = "La longueur du prenom doit etre d'au moins 3 caracteres";
    }
    else { infoprenom.textContent = "";}
}

function ageupdate(){
    if (age.value < 0 || age.value > 120){
        infoage.textContent = "L'age doit etre entre 0 et 120 ans";
    }
    else {
        if (age.length==0) infoage.textContent = "Veuillez renseigner l'age";
        else infoage.textContent = "";
}

function sexeupdate(){
    if (!h.checked && !f.checked && !nb.checked){
        infosexe.textContent = "Veuillez renseigner votre sexe";
    }
    else { infosexe.textContent = "";}
}

function mdpupdate(){
    var isNumber = false;
    var isMin = false;
    var isMaj = false;
    for (var i=0; i<mdp.value.length; i++){
        if (!isNaN(parseInt(mdp.value.charAt(i)))){ isNumber = true; }
        else{
            if (mdp.value.charAt(i) == mdp.value.charAt(i).toUpperCase()){ isMaj = true; }
            else{
                if (mdp.value.charAt(i) == mdp.value.charAt(i).toLowerCase()){ isMin = true; }
            }
        }
    }
    if (mdp.value.length < 6 || !isNumber || !isMin || !isMaj){
        infomdp.textContent = "Le mot de passe doit avoir au moins 6 caracteres, avec au moins une minuscule, une majuscule et un nombre";
    }
    else { infomdp.textContent = "";}
}

function confirmupdate(){
    var isSame = true;
    for (var i=0; i<confirm.value.length; i++){
        if (mdp.value.charAt(i) != confirm.value.charAt(i)){ isSame = false; }
    }
    if (!isSame || mdp.value.length != confirm.value.length){
        infoconfirm.textContent = "Le mot de passe n'est pas le meme";
    }
    else { infoconfirm.textContent = "";}
}

function paysupdate(){
    if (pays.value == "choisir"){
        infopays.textContent = "Veuillez preciser votre pays";
    }
    else { infopays.textContent = "";}
}

function valider(){
    nomupdate();
    prenomupdate();
    ageupdate();
    sexeupdate();
    mdpupdate();
    confirmupdate();
    paysupdate();
}

function reset(){
    nom.value = "";
    infonom.textContent = "";
    prenom.value = "";
    infoprenom.textContent = "";
    age.value = "";
    infoage.textContent = "";
    h.checked = false;
    f.checked = false;
    nb.checked = false;
    infosexe.textContent = "";
    mdp.value = "";
    infomdp.textContent = "";
    confirm.value = "";
    infoconfirm.textContent = "";
    pays.value = "";
    infopays.textContent = "";
}

document.addEventListener("DOMContentLoaded", function(event){
    console.log("oui");
    nom.addEventListener("input",nomupdate);
    prenom.addEventListener("input",prenomupdate);
    age.addEventListener("input",ageupdate);
    h.addEventListener("input",sexeupdate);
    f.addEventListener("input",sexeupdate);
    nb.addEventListener("input",sexeupdate);
    mdp.addEventListener("input",mdpupdate);
    confirm.addEventListener("input",confirmupdate);
    pays.addEventListener("input",paysupdate);
 
    var butv = document.getElementById("btvalide");
    butv.addEventListener("click",valider);

    var butr = document.getElementById("btreset");
    butr.addEventListener("click",reset);
});