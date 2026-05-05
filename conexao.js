console.log ("ola java script")

function cadastrar(){

let lg = document.querySelector("#login").value
let sn = document.querySelector("#senha").value
let n = document.querySelector("#nome").value
let em = document.querySelector("#email").value

let dados = [
    {login:lg, senha:sn, nome:n, email:em}
]

    alert("Seu nome é: " + n )
    alert("sua senha é:" + sn)

    console.log("Dados: " + dados[0].login)

    document.querySelector("#nome").value = ""
    document.querySelector("#senha").value = ""
    document.querySelector("#login").value = ""
    document.querySelector("#email").value = ""
}