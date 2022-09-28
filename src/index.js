import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';


let kep = document.getElementById("kep");


function kepurl() {
    document.getElementById("kep").src = document.getElementById("kepurl").value;
}
document.getElementById("kepurl").addEventListener("change", kepurl);

function kepszelesseg() {
    kep.style.width = document.getElementById("kepszelesseg").value + "px";
}
document.getElementById("kepszelesseg").addEventListener("change", kepszelesseg);

function kepkeretvastagsag() {
    kep.style.borderStyle = "solid";
    kep.style.borderWidth = document.getElementById("kepkeretvastagsag").value + "px";
}
document.getElementById("kepkeretvastagsag").addEventListener("change", kepkeretvastagsag);


function kepkeretszin() {
    kep.style.borderColor = document.getElementById("kepkeretszin").value;
}
document.getElementById("kepkeretszin").addEventListener("change", kepkeretszin);


function gombkatt() {
    
    document.body.classList.add("dark-mode");
}   
document.getElementById("gombkatt").addEventListener("click", gombkatt);


