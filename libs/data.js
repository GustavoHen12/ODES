var loki = require('lokijs');

class DataControler
{
    constructor(tabela, coll)
    {
        //cria o objeto da tabela
        //pega os dados via LokiJs
        const app = require('electron').remote.app;
        let caminho = app.getAppPath();
        let directory = caminho.concat('/data/');
        let nome = (directory.concat(tabela)).concat('.json');
        console.log(nome);
        //cria base de dados
        this.collection = coll;//nome da colecao que sera utilizada
        //  ver conf. ex:https://github.com/techfort/LokiJS/blob/master/examples/quickstart2.js
        this.tabela =  new loki(nome, { 
            autoload: true,
            autoloadCallback : () => {
                var entries = this.tabela.getCollection(this.collection);
                if (entries === null) {
                    entries = this.tabela.addCollection(this.collection);
                }
            },
            autosave: true, 
            autosaveInterval: 4000
        });    
    }

    //NAO FUNCIONA E EU NAO SEI PORQUE
    confUnique(coll, unico)
    {
        var entries = this.tabela.getCollection(coll);
        if (entries === null) {
            entries = this.tabela.addCollection(coll,{
                unique: [unico]
            });
            this.collection = coll;//seta collection
            return  true;
        }
        return null;
    }
    //metodos para editar tabela

    //recebe os dados para um novo objeto, ou seja a key e o valor
    sendData(dado)
    {
        //verifica se a collection ja existe
        var novo = this.tabela.getCollection(this.collection);
        //      talvez criar verificacoes
        //  https://stackoverflow.com/questions/40617192/lokijs-is-there-a-way-to-make-a-compound-unique-index-in-loki
        novo.insert(dado);
        this.tabela.save();
    }

    

    //recebe um id e apaga o dado
    deleteData(lokiID)
    {
        var coll = this.tabela.getCollection(this.collection );
        if (coll === null) return null;
        //pega o elemento que sera removido
        let old = coll.get(lokiID);
        if (old == null) return false
        console.log(lokiID);
        //passa os novos dados         
        coll.remove(old);
        return true;
    }

    //retorna todos os dados do objeto no formato Javascript
    receiveData()
    {
        var novo = this.tabela.getCollection(this.collection );
        if (novo === null) return null;
        //return  novo.chain().data({removeMeta:true});
        console.log(novo.chain().data());
        return  novo.chain().data();
    }

    
    lastID()
    {
        var novo = this.tabela.getCollection(this.collection );
        let data = novo.chain().data();
        let tam = Object.keys(data).length;
        if (tam == 0)
            return 0;
        return (data[tam-1].$loki);
    }
    
    //a partir de um unico dado retorna todas as informacoes
    //deve ser passado em objeto em query: {'chave':'objeto'}
    //deve ser passado o criterio de ordem em sort: 'chave'
    consultData(query, sort)
    {
        var coll = this.tabela.getCollection(this.collection);
        if (coll === null) return null;
        let res =  coll.chain()
                    .find(query)
                    .simplesort(sort)
                    .data({removeMeta:true});
        return res;
    }

    //a partir de um objeto, atualiza os dados
    //e passado um dado de busca, ou seja, o que sera procurado
    //no objeto que sera substituido
    updateData(newData, items, lokiID)
    {
        var coll = this.tabela.getCollection(this.collection );
        if (coll === null) return null;
        //pega o elemento que sera atualizado
        let old = coll.get(lokiID);
        //passa os novos dados         
        for(let i = 0; i < items.length; i++)
            old[items[i]] = newData[items[i]];
        //atualiza dados
        console.log('->' + old);
        coll.update(old);
    }

    //igual ao receive, mas utilza promisses
    getData()
    {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                var novo = this.tabela.getCollection(this.collection);
                if (novo != null) 
                    resolve(novo.chain().data({removeMeta:true}));
                else
                    reject(null);}, 1000);
        });
    }

    //consultData com promisse
    searchData(query, sort)
    {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                var ret = this.consultData(query, sort);
                if (ret != null) 
                    resolve(ret);
                else
                    reject(null);}, 1000);
        });
    }

}

module.exports = {DataControler : DataControler};