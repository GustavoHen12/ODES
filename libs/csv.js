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
}

module.exports = {File : File};