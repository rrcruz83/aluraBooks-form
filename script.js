var consultaCEP = fetch("http://viacep.com.br/ws/01001000/json/")
.then(resposta => resposta.json())//conversão para json, pois os dados chegam em formato de bytes e precisamos transformar em outro formato para manipulá-los.
.then(r => {
    if (r.erro) {
        throw Error('Esse cep não existe!');
    } else {
        console.log(r)    
    }
})
.catch(erro => console.log(erro))
.finally(mensagem => console.log("Processamento Concluído!"))

console.log(consultaCEP)