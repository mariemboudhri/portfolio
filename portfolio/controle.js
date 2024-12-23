const prenom=document.getElementById("t1").value.trim();
const nom=document.getElementById("t2").value.trim();
const email =document.getElementById("t3").value.trim();
const pw=document.getElementById("t4").value.trim();
const confirmpw=document.getElementById("t5").value;
const genre=document.getElementsByName("M");
const genre1=document.getElementsByName("F");
const pays=document.getElementById("pays");

function verif(){
if(!prenom|| !nom || !email || !pw || !confirmpw || !genre || !genre1 || !pays){
    alert("Tous les champs sont obligatoires!!!");
    return;
}

if(pw !==confirmpw){
    alert("le mot de passe ne correspond pas a la confirmation!!!");
    return; 
}

if(!email.includes("@")){
    alert("adresse invalide!!!");
    return;
}

alert("Inscription réussie!!")
}