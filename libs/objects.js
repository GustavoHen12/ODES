class construtorObj
{
    constructor()
    {

    }
    //recebe um objeto aluno, 'dado' e retorna um HTML
    builAlunos(dado)
    {
        var el = document.createElement('div');        
        var domString ='<div id ="'+ dado.id + '" class = "alunoGroup">' +
                            '<div id = "dados'+ dado.id +'" class = "dadoAlunos">'+
                                '<p style="width: 45%" id = "Anome">'+dado.nome+'</p>'+
                                '<p style="width: 5%" id = "Aturmo">'+dado.turno+'</p>'+
                                '<p  style="width: 5%" id = "Aano">'+dado.turma+'</p>'+
                                '<p  style="width: 15%" id = "Aprofessora">'+dado.prof+'</p>'+
                                '<p  style="width: 30%" id = "Adef">'+dado.deficiencia+'</p>'+
                            '</div>'+
                            
                            '<div class = "acoesAluno">'+
                                '<button id = "plusButton" class = "botaoAluno" onclick="plusButton('+ dado.id +')"><img src="img/plus.svg"></button>'+
                                '<button id = "relatoryButton" onclick="relatoryButton('+ dado.id + ')"><img src="img/relatory.svg"></button>'+
                                '<button id = "editButton" onclick="editButton('+ dado.id + ')"><img src="img/edit.svg"></button>'+
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
        //'<button id = "trianguloButton" onclick="trianguloButton('+ dado.id + ')"><img src="img/triangulo.svg"></button>'+
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

    buildEscolas(escola)
    {
        var el = document.createElement('div');        
        var domString = '<div class = "escolasContent">'+
                        '    <p class = "nomeEscola" onclick="goTo('+escola.nome+')">'+escola.nome+'</p>'+
                        '</div>';
        el.innerHTML =  domString;
        return el.firstChild;
    }

    builAlunosEdit(dado)
    {
        var el = document.createElement('div');
        if(dado.turno == "T")        
        {
            var domString = '<div id = "'+ dado.id +'edit" class = "editaAlunos">'+
                            '<form class = "formularioAlunos" action = "#" method="POST">'+
                                '<fieldset>'+
                                    '<input class = "inputAluno" type="text" id="nome" name="nome" style="width: 40%" value="'+dado.nome+'">'+
                                    '<select style="width: 5%" name="turno" id="turno">'+
                                        '<option value="">--</option>'+
                                        '<option value="T" selected>T</option>'+
                                        '<option value="M">M</option>'+
                                    '</select>'+
                                    '<input class = "inputAluno" type="text" id="turma" name="turma" style="width: 5%" value="'+dado.turma+'">'+
                                    '<input class = "inputAluno" type="text" id="prof" name="prof" style="width: 15%" value="'+dado.prof+'">'+
                                    '<input class = "inputAluno" type="text" id="deficiencia" name="deficiencia" style="width: 25%" value="'+dado.deficiencia+'">'+
                                '</fieldset>'+
                            '</form>'+
                        '</div>';
        }
        else
        {
            if(dado.turno == "M")
            {
                var domString = '<div id = "'+ dado.id +'edit" class = "editaAlunos">'+
                                '<form class = "formularioAlunos" action = "#" method="POST">'+
                                    '<fieldset>'+
                                        '<input class = "inputAluno" type="text" id="nome" name="nome" style="width: 40%" value="'+dado.nome+'">'+
                                        '<select style="width: 5%" name="turno" id="turno">'+
                                            '<option value="">--</option>'+
                                            '<option value="T">T</option>'+
                                            '<option value="M" selected>M</option>'+
                                        '</select>'+
                                        '<input class = "inputAluno" type="text" id="turma" name="turma" style="width: 5%" value="'+dado.turma+'">'+
                                        '<input class = "inputAluno" type="text" id="prof" name="prof" style="width: 15%" value="'+dado.prof+'">'+
                                        '<input class = "inputAluno" type="text" id="deficiencia" name="deficiencia" style="width: 25%" value="'+dado.deficiencia+'">'+
                                    '</fieldset>'+
                                '</form>'+
                            '</div>';
            }
            else
            {
                var domString = '<div id = "'+ dado.id +'edit" class = "editaAlunos">'+
                                '<form class = "formularioAlunos" action = "#" method="POST">'+
                                    '<fieldset>'+
                                        '<input class = "inputAluno" type="text" id="nome" name="nome" style="width: 40%" value="'+dado.nome+'">'+
                                        '<select style="width: 5%" name="turno" id="turno">'+
                                            '<option value=""selected>--</option>'+
                                            '<option value="T">T</option>'+
                                            '<option value="M">M</option>'+
                                        '</select>'+
                                        '<input class = "inputAluno" type="text" id="turma" name="turma" style="width: 5%" value="'+dado.turma+'">'+
                                        '<input class = "inputAluno" type="text" id="prof" name="prof" style="width: 15%" value="'+dado.prof+'">'+
                                        '<input class = "inputAluno" type="text" id="deficiencia" name="deficiencia" style="width: 25%" value="'+dado.deficiencia+'">'+
                                    '</fieldset>'+
                                '</form>'+
                            '</div>';
            }

        }

            el.innerHTML =  domString;
        return el.firstChild;
        
    }
}

module.exports = {construtorObj : construtorObj};