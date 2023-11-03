function pegarID(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(7)
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
            var deuErro = true;
            
            if(!deuErro){
                resolve({time: 4, to:"migueldossantos0096@gmail.com"})
            }else{
                reject("Valor indefinido")
            }
        },4000)
    })
}

function pegarUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: "Miguel", lang:"Js"},
                {name: "Joao", lang:"Java"},
                {name: "Arthur", lang:"C#"}
            ])
        }, 2000);
    })
}

async function principal(){
    var id = await pegarID();
    var email = await buscarEmailNoBanco(id);
    try{
        await enviarEmail("Ola, como vai?", email);
        console.log("Email enviado com sucesso")
    }catch(erro){
        console.log(erro)
    }

}

principal();

/*
pegarUsuarios().then((usuarios)=>{
    console.log(usuarios)       Isso sera substituido pelo async function
})*/



/*
pegarID().then((id) => {
    buscarEmailNoBanco(id).then((email) => {
        
        enviarEmail("Ola, como vai?", email).then(() => {
            console.log("Email enviado para o usuario com id:" + id)
        }).catch((err) => {
            console.log(err)
        })
    })
})
*/