const{ obterPessoas } = require('./services');

async function main(){

    try{

        const { results } = await obterPessoas('a');

        console.log(results);
        const pesos = results.map(item=>{
            parseInt(item.height);
        });
        
        const pesoTotal = pesos.reduce((anterior, atual)=>{

            return anterior + atual;
        });
        console.log('pesos', pesos)
        console.log('total',pesoTotal);

    }catch(err){
        console.error(err);

    }
}

main();