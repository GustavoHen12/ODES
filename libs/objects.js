class construtorAlunos
{
    constructor()
    {

    }
    builAlunos()
    {
        var el = document.createElement('div');        
        var domString ='<div class = "alunoGroup"><div class = "dadoAlunos"><p id = "Anome"></p><p id = "Aturmo"></p><p id = "Aano"></p><p id = "Aprofessora"></p><p id = "Adef"></p></div><div class = "acoesAluno"><button id = "plusButton" class = "botaoAluno" onclick="teste()"><img src="img/plus.svg"></button><button id = "relatoryButton" class = "botaoAluno"><img src="img/relatory.svg"></button><button id = "editButton" class = "botaoAluno"><img src="img/edit.svg"></button><button id = "trianguloButton" class = "botaoAluno"><img src="img/triangulo.svg"></button></div></div>';
        el.innerHTML =  domString;
        return el.firstChild;
    }
}

module.exports = {construtorAlunos : construtorAlunos};