const EventEmitter = require('events');


class MeuEmissor extends EventEmitter(){

    
}

const meuEmissor = new MeuEmissor();

const nomeEvento = 'usuario:click';

meuEmissor.on(nomeEvento, function(click){

    console.log("um usuario clicou", click);
});

meuEmissor.emit(nomeEvento, 'na barra de rolagem');


let count = 0;

setInterval(()=>{

    meuEmissor.emit(nomeEvento, 'no ok' + count++);

}), 1000;

