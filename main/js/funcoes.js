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

function sendNew()
{
    let newAluno = new alunoData();
    newAluno.nome = document.getElementById("nome").value;
    newAluno.deficiencia = document.getElementById("deficiencia").value;
    newAluno.turno = document.getElementById("turno").value;
    newAluno.turma = document.getElementById("turma").value;
    newAluno.prof = document.getElementById("prof").value;
    newAluno.escola = document.getElementById("escola").innerHTML;   /*Alterar para algo mais seguro*/
    newAluno.id = getNewId();
    
    console.log(newAluno);
    alunos.sendData(newAluno);

    location.reload();
}

function getNewId()
{
    //para que o ID seja igual ao metadado $loki
    return alunos.lastID()+1;
}