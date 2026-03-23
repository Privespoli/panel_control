const miNombre = "Pri_&_Meli"; 
const destinos = ["Neptuno", "Urano", "Marte"];


const botonIdentificar = document.getElementById("btn-identificar");
const pantallaNombre = document.getElementById("nombre-id");
const pantallaDestino = document.getElementById("destino-id");


botonIdentificar.addEventListener("click", function() {

    pantallaNombre.innerText = miNombre;
    pantallaDestino.innerText = destinos[2];
    
    
    console.log("Comandante identificado! El destino es:" + destinos[2]);
});