var infoconfirm = document.getElementById("infoconfirm");
var infopays = document.getElementById("infopays");

function nomupdate(){
    var nom = document.getElementById("fNom");
    var infonom = document.getElementById("infonom");
    if (nom.value.length < 3){
        infonom.textContent = "La longueur du nom doit etre d'au moins 3 caracteres";
    }
    else { infonom.textContent = "";}
}

function prenomupdate(){
    var prenom = document.getElementById("fPrenom");
    var infoprenom = document.getElementById("infoprenom");
    if (prenom.value.length < 3){
        infoprenom.textContent = "La longueur du prenom doit etre d'au moins 3 caracteres";
    }
    else { infoprenom.textContent = "";}
}

function ageupdate(){
    var age = document.getElementById("fAge");
    var infoage = document.getElementById("infoage");
    if (age.value < 0 || age.value > 120){
        infoage.textContent = "L'age doit etre entre 0 et 120 ans";
    }
    else { infoage.textContent = "";}
}

function sexeupdate(){
    var h = document.getElementById("Homme");
    var f = document.getElementById("Femme");
    var nb = document.getElementById("NB");
    var infosexe = document.getElementById("infosexe");
    if (!h.checked && !f.checked && !nb.checked){
        infoage.textContent = "Veuillez renseigner votre sexe";
    }
    else { infoage.textContent = "";}
}

function mdpupdate(){
    var mdp = document.getElementById("fMdp");
    var infomdp = document.getElementById("infomdp");
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
    var mdp = document.getElementById("fMdp");
    var confirm = document.getElementById("fConfirm");
    var infoconfirm = document.getElementById("infoconfirm");
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
    var pays = document.getElementById("fPays");
    var infopays = document.getElementById("infopays");
    if (pays.value == "choisir"){
        infopays.textContent = "Veuillez preciser votre pays";
    }
    else { infopays.textContent = "";}
}

function valider(){
    nomupdate();
    prenomudpate();
    ageupdate();
    sexeupdate();
    mdpupdate();
    confirmupdate();
    paysupdate();
}

document.addEventListener("DOMContentLoaded", function(event){

    var nom = document.getElementById("fNom");
    nom.addEventListener("input",nomupdate);

    var prenom = document.getElementById("fPrenom");
    prenom.addEventListener("input",prenomupdate);

    var age = document.getElementById("fAge");
    age.addEventListener("input",ageupdate);

    var h = document.getElementById("Homme");
    h.addEventListener("input",sexeupdate);
    var f = document.getElementById("Femme");
    f.addEventListener("input",sexeupdate);
    var nb = document.getElementById("NB");
    nb.addEventListener("input",sexeupdate);

    var mdp = document.getElementById("fMdp");
    mdp.addEventListener("input",mdpupdate);

    var confirm = document.getElementById("fConfirm");
    confirm.addEventListener("input",confirmupdate);

    var pays = document.getElementById("fPays");
    pays.addEventListener("input",paysupdate);

    var but = document.getElementById("bt");
    but.addEventListener("click",valider);
});