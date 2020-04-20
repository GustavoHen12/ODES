function retornaPagina(paginaAtual){
    if(paginaAtual == "School")
        window.location.href = "Home.html";
    else if(paginaAtual == "Student")
        window.location.href = "School.html";
}

function Reload(){
    location.reload();
}