let nome = document.querySelector("#txtNome")
let email = document.querySelector("#txtEmail")
let assunto = document.querySelector("#txtAssunto")
let validaNome, validaEmail, validaAss;

function checkNome(){
    let txt = document.querySelector("#alerta1")
    if(nome.value.length < 3) {
        nome.style.borderColor = "red"
        txt.innerHTML = "Nome inválido"
        txt.style.color = "red"
    } else {
        nome.style.borderColor = "green"
        txt.innerHTML = "Nome Válido"
        txt.style.color = "green"
        validaNome = true
    }
}

function checkEmail(){
    let txt = document.querySelector("#alerta2")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        email.style.borderColor = "red"
        txt.innerHTML = "Email inválido"
        txt.style.color = "red"
    } else {
        email.style.borderColor = "green"
        txt.innerHTML = "Email Válido"
        txt.style.color = "green"
        validaEmail = true
    }

}

function checkAssunto(){
    let txt = document.querySelector("#alerta3")
    var validaAssunto = (assunto.value.length > 100)
    if(validaAssunto) {
        txt.innerHTML = "Texto precisa ter meno que 100 caracteres"
        txt.style.color = "red"
        txt.style.display = "block"
    } else {
        txt.style.display = "none"
        validaAss = true
        
    }
}

function check(){
    (validaNome && validaEmail && validaAss ? alert("Enviado com sucesso") : alert("Verifique se todos os campos foram preenchidos corretamente"))
}
