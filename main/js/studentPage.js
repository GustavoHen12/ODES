//mensagem de salvo
const { dialog } = require('electron').remote;

async function showMensage(tipo)
{
    if(tipo == "salva"){
        let op = await dialog.showMessageBox(null, salvaMensage);
        if (op.response == 0)
            location.reload;
        else
            retornaPagina('Student');
    }
    else{
        let op = await dialog.showMessageBox(null, deletaMensage);
        retornaPagina('Student');
    }
}

function getNewId()
{
    //para que o ID seja igual ao metadado $loki
    return alunos.lastID();
}
/////////////////////////////////////////////////////////



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
    let resposta = alunos.deleteData(parseInt(id)); 
    if(!resposta){
        console.log("ERRO");
    }
    showMensage("deleta");
}