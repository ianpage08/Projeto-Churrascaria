
const btnEnviar = document.getElementById("enviar")

btnEnviar.addEventListener("click", () =>{
    const numero = "5574998136456"
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const numeroCliente = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

    
    const mensagemCompleta = `Nome: ${nome} \nEmail: ${email} \nNúmero: ${numeroCliente} \nMensagem: ${mensagem}`
    mensagemCompleta.innerhtml = mensagemCompleta
    const mensagemCodificada = encodeURIComponent(mensagemCompleta)

    const  urlWhatsApp = `https://wa.me/${numero}?text=${mensagemCodificada} `
    // Abre o link em uma nova aba ou janela
    window.open(urlWhatsApp, '_blank');
})
