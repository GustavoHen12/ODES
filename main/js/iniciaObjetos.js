const app = require('electron').remote.app;
let path = app.getAppPath();

const struct = require(path.concat("/libs/dataType"));
//constroi objeto para dados basicos dos alunos
let alunoData = struct.makeDataStruct("id nome turno turma prof deficiencia escola");
let relatorioData = struct.makeDataStruct("id tempo texto");
let escolasData = struct.makeDataStruct("nomeEscola");

//constroi objetos que manipulam os arquivos
const dataC = require(path.concat("/libs/data"));
let DataControler = dataC.DataControler;

let escolas = new DataControler("listaEscolas", "escolas");

let alunos = new DataControler("listaAlunos", "alunos");

let relatorio = new DataControler("relatoriosAlunos", "relatorios");
