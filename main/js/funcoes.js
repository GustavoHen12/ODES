//mensagem de salvo
const { dialog } = require('electron').remote;
const salvaMensage = {
    type: 'info',
    buttons: ['Continuar editando', 'Voltar'],
    defaultId: 1,
    title: 'Message',
    message: 'Informações salvas',
};

const deletaMensage = {
    type: 'info',
    buttons: ['Voltar'],
    defaultId: 1,
    title: 'Message',
    message: 'Informações excluidas',
};

async function showMensage(tipo)
{
    if(tipo == "salva"){
        let op = await dialog.showMessageBox(null, salvaMensage);
        if (op.response == 0)
            location.reload;
        else
            returnPage();
    }
    else{
        let op = await dialog.showMessageBox(null, deletaMensage);
        returnPage();
    }
}
function getNewId()
{
    //para que o ID seja igual ao metadado $loki
    return alunos.lastID();
}
/////////////////////////////////////////////////////////

function returnPage(){
    window.location.href = "DadosEscola.html";
}


function sendNew(){

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
        showMensage("salva");
    }
    //se for um novo aluno
    else{
        newAluno.escola = sessionStorage.getItem("escola");
        newAluno.id = 0;     
        //primeiro salva para pegar o id
        alunos.sendData(newAluno);
        //atualiza dado
        let id = getNewId();
        console.log(id);
        alunos.updateData({"id":id},["id"], id);
        showMensage("salva");
    }
}

function deletaAluno(){
    let id = sessionStorage.getItem("editaAluno");
    //IMPLEMENTA DELETA RELATORIOS

    if(!alunos.deleteData(parseInt(id))){
        console.log("ERRO");
    }

    showMensage("deleta");
}