var visibilidade = true;
function mostrarOcultar() {
    if (visibilidade) {
        document.getElementById("div").style.display = "none";
        visibilidade = false;
    } else {
        document.getElementById("div").style.display = "block";
        visibilidade = true;
    }

}