const { dialog } = require('electron').remote;
let fs = require('fs');

class File
{
    constructor(){
    }
    //recebe um array de objetos e um vetor com as chaves que serão acessadas
    //retorna uma srting com o formato do CSV
    toCsv(objects, header)
    {
        var str = '';
        str = header.join();
        str += '\n';
        //para cada objeto
        objects.forEach(row => {
            //cria uma linha com os valores
            let i = 0;
            for(i = 0; i < header.length-1; i++){
                str += row[header[i]] + ',';
            }
            str += row[header[i]];
            str += '\n';
        });
        return str;
    }

    async saveCSV(content)
    {
        let WIN = require('electron').remote.getCurrentWindow();

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

}

module.exports = {File : File};