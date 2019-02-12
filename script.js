function affiche(){
    alert("Hello word!");
}

function hello(){
    var name = document.getElementById("idName");
    var strtoshow = "Hello";

    if (name.value) { strtoshow += " " + name.value; }
    strtoshow += " !";
    alert(strtoshow);
}

function changerimg(){
    var img = document.getElementById("idimg");
    var but3 = document.getElementById("btcasser");
    if (img.src.endsWith("momo.jpg")){
        img.src="momo2.jpg";
        img.width="806";
        but3.textContent = "se calmer";
    }
    else {
        img.src="momo.jpg";
        img.width="288";
        but3.textContent = "casser la tele";
    }
}

document.addEventListener("DOMContentLoaded", function(event){
    //console.log("le Dom est charge");
    //affiche();

    var but = document.getElementById("bthello");
    but.addEventListener("click",hello);

    var but2 = document.getElementById("btcasser");
    but2.addEventListener("click",changerimg);
});