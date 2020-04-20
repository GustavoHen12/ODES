function goTo(escola){
    sessionStorage.setItem('escola', escola);
    window.location.href = "School.html";
}

function novaEscola(){
    let escola = new escolasData();
    escola.nome = document.getElementById("novaEscola").value;
    
    escolas.sendData(escola);

    location.reload();
}

function novaLista(){
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}

//MODAL        
window.onclick = function(event) {
    if (event.target == modal) {
        fechaModal()
    }
}
function fechaModal() {
    modal.style.display = "none";
}