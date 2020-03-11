class construtorAlunos
{
    constructor()
    {

    }
    //recebe um objeto aluno, 'dado' e retorna um HTML
    builAlunos(dado)
    {
        var el = document.createElement('div');        
        var domString ='<div id ="'+ dado.id + '" class = "alunoGroup">' +
                            '<div class = "dadoAlunos">'+
                                '<p id = "Anome">'+dado.nome+'</p>'+
                                '<p id = "Aturmo">'+dado.turno+'</p>'+
                                '<p id = "Aano">'+dado.ano+'</p>'+
                                '<p id = "Aprofessora">'+dado.prof+'</p>'+
                                '<p id = "Adef">'+dado.defciencia+'</p>'+
                            '</div>'+
                            '<div class = "acoesAluno">'+
                                '<button id = "plusButton" class = "botaoAluno" onclick="plusButton('+ dado.id +')"><img src="img/plus.svg"></button>'+
                                '<button id = "relatoryButton" onclick="relatoryButton('+ dado.id + ')"><img src="img/relatory.svg"></button>'+
                                '<button id = "editButton" onclick="editButton('+ dado.id + ')"><img src="img/edit.svg"></button>'+
                                '<button id = "trianguloButton" onclick="trianguloButton('+ dado.id + ')"><img src="img/triangulo.svg"></button>'+
                            '</div>'+
                            '<div id = "plus'+ dado.id + '"class = "plusArea">'+
                                '<div class = "opButtons">'+
                                    '<button onclick="sendRelatory('+dado.id+')">Salvar</button>'+
                                    '<button onclick="plusButton('+dado.id+')">Cancelar</button>'+
                                '</div>'+
                                '<div id = "addRelatory" class = "inputContainer">'+
                                    '<textarea rows="6" id="add'+dado.id+'" style="width: 99%" value=""></textarea>'+
                                '</div>'+
                            '</div>' +
                        '</div>';
        el.innerHTML =  domString;
        return el.firstChild;
    }

    builRelatorio(relatorio)
    {
        var el = document.createElement('div');        
        var domString = '<div class = "itemRelat">'+
                            '<h4>'+relatorio.tempo+'</h4>'+
                            '<p>'+relatorio.texto+'</p>'+
                        '</div>';
        el.innerHTML =  domString;
        return el.firstChild;
    }
}

module.exports = {construtorAlunos : construtorAlunos};