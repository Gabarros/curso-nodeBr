const service = require('./services');

async function main(){

    try{
        const results = await service.obterPessoas('a');

        // const names = [];

        // results.results.forEach(item=>{

        //     names.push(item.name);

        // });

        let names = results.results.map(pessoa=> pessoa.name
        );

        console.log(names);
    }catch(err){

        console.error('Erro:', err);

    }
}

main();