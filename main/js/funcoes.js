/*function getPath () {
    const app = require('electron').remote.app;
    let caminho = app.getAppPath();
    return caminho;
}

let path = getPath();
const dataC = require(path.concat("/libs/data"));
let DataControler = dataC.DataControler;

const struct = require(path.concat("/libs/dataType"));
let alunoData = struct.makeDataStruct("id nome turno turma prof defciencia escola");

let alunos = new DataControler("listaAlunos");*/

async function sendNew()
{
    let newAluno = new alunoData();
    newAluno.nome = document.getElementById("nome").value;
    newAluno.deficiencia = document.getElementById("deficiencia").value;
    newAluno.turno = document.getElementById("turno").value;
    newAluno.turma = document.getElementById("turma").value;
    newAluno.prof = document.getElementById("prof").value;
    //se for para editar o aluno
    let id = sessionStorage.getItem("editaAluno");
    if(id != "null")
    {
        newAluno.escola = document.getElementById("escolaOptions").value;        
        await alunos.setData(newAluno, ["escola","nome", "turno", "turma", "prof", "deficiencia"], parseInt(id));
        console.log(newAluno);
        window.location.href = "DadosEscola.html";
    }
    //se for um novo aluno
    else{
        newAluno.escola = sessionStorage.getItem("escola");
        newAluno.id = getNewId();    
        alunos.sendData(newAluno);
        location.reload();
    }
    
    console.log(newAluno);



}

function getNewId()
{
    //para que o ID seja igual ao metadado $loki
    return alunos.lastID()+1;
}