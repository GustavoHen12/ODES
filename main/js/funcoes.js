function getPath () {
    const app = require('electron').remote.app;
    let caminho = app.getAppPath();
    return caminho;
}

let path = getPath();
const dataC = require(path.concat("/libs/data"));
let DataControler = dataC.DataControler;

const struct = require(path.concat("/libs/dataType"));
let alunoData = struct.makeDataStruct("id nome turno turma prof defciencia escola");

let teste = new DataControler("lista1");

function sendNew()
{
    console.log("oi");
    let elemento = document.getElementById("nome");
    let nome = elemento.value;
    elemento = document.getElementById("deficiencia");
    let deficiencia = elemento.value;
    elemento = document.getElementById("turno");
    let turno = elemento.value;
    elemento = document.getElementById("turma");
    let turma = elemento.value;
    elemento = document.getElementById("prof");
    let prof = elemento.value;
    let id = "1";
    let newAluno = new alunoData(id, nome, turno, turma, prof, deficiencia);
    console.log(newAluno);
    teste.sendData(newAluno);
}