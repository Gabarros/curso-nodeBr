const service = require('./services');

async function main(){
    
    try{


        const result = await service.obterPessoas('a');
        const names = [];

        // for(let i in result.results){
        //     // console.log(result[i]);
        //     let pessoa = result.results[i];
  
        //     names.push(pessoa.name);
        // }

        for (pessoa of result.results){
            names.push(pessoa.name);
        }

        console.log('names', names);
        }catch(err){

        console.error(err);
    }

}

main();