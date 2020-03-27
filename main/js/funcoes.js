//mensagem de salvo
const { dialog } = require('electron').remote;
const salvaMensage = {
    type: 'info',
    buttons: ['Continuar editando', 'Voltar'],
    defaultId: 1,
    title: 'Message',
    message: 'Informações salvas',
};

async function showMensage()
{
    let op = await dialog.showMessageBox(null, salvaMensage, (response) => {
        console.log('>'+response);
    });
    if (op == 0){
        return;
    }
    else{
        returnPage();
    }
}

function returnPage()
{
    window.location.href = "DadosEscola.html";
}

function sendNew()
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
        alunos.updateData(newAluno, ["escola","nome", "turno", "turma", "prof", "deficiencia"], parseInt(id));
        //mostra mensagem de salvo
        showMensage();
    }
    //se for um novo aluno
    else{
        newAluno.escola = sessionStorage.getItem("escola");
        newAluno.id = getNewId();    
        alunos.sendData(newAluno);
        location.reload();
    }
}

function getNewId()
{
    //para que o ID seja igual ao metadado $loki
    return alunos.lastID()+1;
}