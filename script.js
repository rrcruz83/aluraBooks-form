/*var consultaCEP = fetch("http://viacep.com.br/ws/01001000/json/")
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

console.log(consultaCEP)*/

/*async function buscaEndereco(cep) {//A declaração async function define uma função assíncrona
    var consultaCEP = await fetch(`http://viacep.com.br/ws/${cep}/json/`);//O operador await é utilizado para esperar por uma Promise. 
    var consultaCEPConvetida = await consultaCEP.json();
    if (consultaCEPConvetida.erro) {
        throw Error('Esse cep não existe!');
    } 
    
    console.log(consultaCEPConvetida);    
    return consultaCEPConvetida;
}


let ceps = ['13328020', '01001000'];
let conjuntoCEPs = ceps.map(valores => buscaEndereco(valores));
console.log(conjuntoCEPs)
Promise.all(conjuntoCEPs).then(respostas => console.log(respostas));
 */

async function buscaEndereco(cep) {//A declaração async function define uma função assíncrona
    var mensagemErro = document.getElementById("erro");
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`http://viacep.com.br/ws/${cep}/json/`);//O operador await é utilizado para esperar por uma Promise. 
        var consultaCEPConvetida = await consultaCEP.json();

        if (consultaCEPConvetida.erro) {
            throw Error("CEP não existe!")
        }

        var logradouro = document.getElementById("endereco");
        var cidade = document.getElementById("cidade");
        var estado = document.getElementById("estado");

        logradouro.value = consultaCEPConvetida.logradouro
        bairro.value = consultaCEPConvetida.bairro
        cidade.value = consultaCEPConvetida.localidade
        estado.value = consultaCEPConvetida.uf
        
        //console.log(consultaCEPConvetida);
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!`
        console.log(erro);
    }
}

//buscaEndereco();
var cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
