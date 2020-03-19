const app = require('electron').remote.app;
let path = app.getAppPath();

const struct = require(path.concat("/libs/dataType"));
//constroi objeto para dados basicos dos alunos
let alunoData = struct.makeDataStruct("id nome turno turma prof defciencia escola");
let relatorioData = struct.makeDataStruct("id tempo texto");

//constroi objetos que manipulam os arquivos
const dataC = require(path.concat("/libs/data"));
let DataControler = dataC.DataControler;

let alunos = new DataControler("listaAlunos", "dados");
let temp = alunos.confUnique("alunos", "id");

let relatorio = new DataControler("relatoriosAlunos", "relatorios");
