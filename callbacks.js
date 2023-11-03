function enviarEmail (corpo, para, callback){
    setTimeout(() => {
        var deuErro = true;
        if(deuErro){
            callback("Envio do email falhou");
        }else{
            callback();
        }
    }, 8000)
}

console.log("Iniciando processo para envio de email")
enviarEmail("Oi, seja bem vindo ao Guia", "migueldossantos0096@gmail.com", (erro)=>{
    if(erro == undefined){
        console.log("Tudo ok!")
    }else{
        console.log("Ocorreu um erro:" + erro)
    }
})
