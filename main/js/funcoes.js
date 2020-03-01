function getPath () {
    const app = require('electron').remote.app;
    let caminho = app.getAppPath();
    let novocaminho = caminho.concat("/libs/data");
    return novocaminho;
}

const dataC = require(getPath());
let DataControler = dataC.DataControler;
let teste = new DataControler("lista1");

function sendNew()
{
    console.log("oi");
}