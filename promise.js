function pegarID(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(5)
        },1500)
    })
}


function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("migueldossantos0096@gmail.com")
        })
    }, 2000)
}


function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{ 
            var deuErro = false;
            
            if(!deuErro){
                resolve({time: 4, to:"migueldossantos0096@gmail.com"})
            }else{
                reject("Valor indefinido")
            }
        },4000)
    })
}

pegarID().then((id) => {
    buscarEmailNoBanco(id).then((email) => {
        
        enviarEmail("Ola, como vai?", email).then(() => {
            console.log("Email enviado para o usuario com id:" + id)
        }).catch((err) => {
            console.log(err)
        })
    })
})