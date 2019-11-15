
function obterUsuario(){
    return new Promise((resolve, reject)=>{

        setTimeout(function(){
            return resolve({
                id: 1,
                nome: 'Gabriel',
                data_nascimento: new Date()
            })
        });

    });


}

function obterTelefone(idUsuario){

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            return resolve({
                telefone: 999830371,
                ddd: 28
            });
        })
    })

}

function obterEndereco(idUsuario){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            return resolve({
                rua: 'Serra',
                numero: 766
            });

        })
    })

}

main();
async function main(){

    try{
        console.time('medida-promise');
        const usuario = await obterUsuario();
        const telefone = await obterTelefone(usuario.id);
        const endereco = await obterEndereco(usuario.id);

        console.log(`
         Nome: ${usuario.nome},
         Endereco: ${endereco.rua}, ${endereco.numero},
         Telefone: ${telefone.ddd}-${telefone.telefone}
        `);
        console.timeEnd('medida-promise');
    }
    catch(error){

        console.error(error);

    }
}

// let usuario = obterUsuario().then(usuario => {

//     console.log("usuario:", usuario);

// }).catch(err=>{
//     console.error('erro:',err);
// });

// let telefone = obterTelefone().then(telefone=>{

//     console.log("telefone:", telefone);
// }).catch(err=>{

//     console.error("erro:", err);
// });