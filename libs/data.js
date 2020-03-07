var loki = require('lokijs');

class DataControler
{
    constructor(tabela)
    {
        //cria o objeto da tabela
        //pega os dados via LokiJs
        const app = require('electron').remote.app;
        let caminho = app.getAppPath();
        let directory = caminho.concat('/data/');
        let nome = (directory.concat(tabela)).concat('.json');
        console.log(nome);
        //cria base de dados
        //  ver conf. ex:https://github.com/techfort/LokiJS/blob/master/examples/quickstart2.js
        this.tabela =  new loki(nome, { 
            autoload: true,
            autoloadCallback : () => {
                var entries = this.tabela.getCollection("dado");
                if (entries === null) {
                    entries = this.tabela.addCollection("dado");
                }
            },
            autosave: true, 
            autosaveInterval: 4000
        });    
    }


    //deleta tabela
    deleteDataSet()
    {

    }
    //metodos para editar tabela

    //recebe os dados para um novo objeto, ou seja a key e o valor
    sendData(dado)
    {
        //verifica se a collection ja existe
        var novo = this.tabela.getCollection("dado");
        //      talvez criar verificacoes
        //  https://stackoverflow.com/questions/40617192/lokijs-is-there-a-way-to-make-a-compound-unique-index-in-loki
        novo.insert(dado);
        this.tabela.save();
    }

    //recebe um id e apaga o dado
    deleteData()
    {

    }

    //retorna todos os dados do objeto no formato Javascript
    //retorna eles ordenados
    receiveData()
    {
        var novo = this.tabela.getCollection("dado");
        if (novo === null) return null;
        return  novo.chain().data({removeMeta:true});
    }

    //a partir de um unico dado retorna todas as informacoes
    consultData(query, sort)
    {
        var coll = this.tabela.getCollection("dado");
        if (coll === null) return null;
        return  coll.chain()
                    .find(query)
                    .simplesort(sort)
                    .data({removeMeta:true});
    }

}

module.exports = {DataControler : DataControler};