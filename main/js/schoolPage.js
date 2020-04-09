//mensagem e caixa de dialodo
const { dialog } = require('electron').remote;

//biblioteca csv
const fileC = require(path.concat("/libs/csv"));
let File = fileC.File;
let CSV = new File;

//para salvar arquivo
let fs = require('fs');

async function saveCSV(content)
{
    WIN = require('electron').remote.getCurrentWindow();

    let options = {
        title: "Salvar tabela",
        defaultPath : path,
        buttonLabel : "Salvar",
        filters :[{name: 'CSV', extensions: ['csv']}]
    }
    //console.log(await dialog.showSaveDialog(WIN, options));
    let filename = await dialog.showSaveDialog(WIN, options)
    console.log(filename.filePath);
    try{
        fs.writeFileSync(filename.filePath, content, 'utf-8');
    }
    catch(e){
        dialog.showErrorBox("Erro", "não foi possível salvar o arquivo")
    }
    
}

function gerarLista(){
    //Pega dados dos alunos
    var escola = sessionStorage.getItem('escola');
    let alu = alunos.consultData({'escola': escola}, 'nome');
    //cria lista csv
    let lista = CSV.toCsv(alu, ["nome", "turno", "turma", "prof", "deficiencia", "escola"]);

    //salva arquivo
    saveCSV(lista);

}



const removeMessage = {
    type: 'question',
    buttons: ['Remover', 'Cancelar'],
    defaultId: 1,
    title: 'Message',
    message: 'Você deseja prosseguir ?',
    detail: 'escola e todos seus dados removidos',
};

const exitoMessage = {
    type: 'info',
    buttons: ['Voltar para Home'],
    defaultId: 1,
    title: 'Message',
    message: 'Escola e todos seus dados removidos',
};

const erroMessage = {
    type: 'info',
    buttons: ['Voltar para Home'],
    defaultId: 1,
    title: 'Message',
    message: 'Ocorreu um erro',
};


async function removeEscola(){
    //pergunta antes de prosseguir
    let op = await dialog.showMessageBox(null, removeMessage);
    if (op.response == 1)
            return;
    
    let school = sessionStorage.getItem('escola');

    //remove todos os alunos da pag
    let res = await alunos.searchData({'escola': school}, 'nome');
    for(let i = 0; i < Object.keys(res).length; i++)
                alunos.deleteData(parseInt(res[i].id));
    //remove a escola
    //da pra melhorar
    let tdEscola = escolas.receiveData();
    let i = 0;
    while((i < Object.keys(tdEscola).length) && (tdEscola[i].nome != school))
        i++;
    if (i < Object.keys(tdEscola).length)
        escolas.deleteData(tdEscola[i].$loki);
    else
        await dialog.showMessageBox(null, erroMessage);
     
    await dialog.showMessageBox(null, exitoMessage);
    retornaPag();
}

function retornaPag(){
    window.location.href = "Home.html";
}


function editButton(id){
    //passa o id do aluno q sera editado
    //ou null se for para adicionar um novo aluno
    sessionStorage.setItem("editaAluno", id);
    window.location.href = "NovoAluno.html";
}

function plusButton(id){
    var ele = ('plus').concat(id);
    var x = document.getElementById(ele);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function sendRelatory(id){
    //pega o id do aluno
    let newRel = new relatorioData;
    newRel.id = id;
    //pega o horario do relatorio
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    newRel.tempo = dateTime;
    //pega o texto do relatorio
    var ele = ('add').concat(id);
    var textarea = document.getElementById(ele);
    newRel.texto = textarea.value;
    //salva
    relatorio.sendData(newRel);
    plusButton(id);//fecha janela
}

function relatoryButton(id){
    //pega dados
    let dados = relatorio.consultData({"id":id}, "tempo");
    let tela = document.getElementById("modalRelatory");

    for(let i = 0; i < Object.keys(dados).length; i++)
        tela.appendChild(construtor.builRelatorio(dados[i]));
    if (Object.keys(dados).length == 0)
    {
        tela.appendChild(construtor.builRelatorio({"tempo":"Não a relatorios disponiveis", "texto":""}));
    }
    //mostra
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}

function editMode(){
    //pega os elementos
    var view = document.getElementById("container");
    var edit = document.getElementById("containerEdit");
    //deixa a tabela de alunos invisivel
    //e a tabela de edicao visivel
    view.style.display = "none";
    edit.style.display = "block";
    //limpa "cache" da pagina de edicao
    let item = document.getElementsByClassName("editaAlunos");
    while(item.length > 0){
        item[0].parentNode.removeChild(item[0]);
    }
    //inicia o modo de edicao
    initEditMode();
}

function viewMode(){
    var view = document.getElementById("container");
    var edit = document.getElementById("containerEdit");
    view.style.display = "block";
    edit.style.display = "none";
    let item = document.getElementsByClassName("alunoGroup");
    while(item.length > 0){
        item[0].parentNode.removeChild(item[0]);
    }
    init();
}

function atualizaDados(){
    let elementos = document.getElementsByClassName("editaAlunos");
    let newUp = new alunoData();
    while(elementos.length > 0){
        //pega id do elemento
        let id = parseInt(elementos[0].getAttribute("id"));
        let inputs = elementos[0].firstChild.firstChild.childNodes; 
        let tam = inputs.length;
        let i = 0;
        while( i < tam)
        {
            if (inputs[i].value != inputs[i].defaultValue)
            {
                newUp["nome"] = inputs[0].value;
                newUp["turno"] = inputs[1].value;
                newUp["turma"] = inputs[2].value;
                newUp["prof"] = inputs[3].value;
                newUp["deficiencia"] = inputs[4].value;
                alunos.updateData(newUp, ["nome", "turno", "turma", "prof", "deficiencia"], id);
                break;
            }
            i++;
        }
        //remove elemento
        elementos[0].parentNode.removeChild(elementos[0]);
    }
    viewMode();
}

function Reload(){
    location.reload();
}

//FECHA MODAL
var span = document.getElementsByClassName("close")[0];
span.onclick = () => fechaModal();
window.onclick = function(event) {
    if (event.target == modal) {
        fechaModal()
    }
}

function fechaModal() {
    modal.style.display = "none";
    let tela = document.getElementById("modalRelatory");
    let item = document.getElementsByClassName("itemRelat");
    while(item.length > 0){
        item[0].parentNode.removeChild(item[0]);
    }
}