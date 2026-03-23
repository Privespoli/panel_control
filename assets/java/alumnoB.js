const motoresActivos = false;

const btnMotores = document.getElementById("btn-motores");
const estadoMotores = document.getElementById("estado-motores");
const btnDespegue = document.getElementById("btn-despegue");

btnMotores.addEventListener("click", function () {
  motoresActivos = true;
  estadoMotores.innerText = "LISTOS";
  estadoMotores.style.color = "lime";
});

btnDespegue.addEventListener("click", function () {
  btnDespegue.classList.add("activado");
});

console.log("motoresActivos")