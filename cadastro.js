let btn = document.querySelector('#verSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelusuario = document.querySelector('#labelusuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmeSenha = document.querySelector('#confirmeSenha')
let labelConfirmeSenha = document.querySelector('#labelConfirmeSenha')
let validConfirmeSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')


nome.addEventListener('keyup', () => {
    if(nome.value.length <= 3) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = ' Nome: Min 4 Caracteres '
        nome.setAttribute('style', 'border-color:red')
        validNome = false

    }else{
        labelNome.setAttribute('style', 'color: white')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color:white')
        validNome = true

    }
})

usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4) {
        labelusuario.setAttribute('style', 'color: red')
        labelusuario.innerHTML = ' Usuário: Min 5 Caracteres '
        usuario.setAttribute('style', 'border-color:red')
        validUsuario = false

    }else{
        labelusuario.setAttribute('style', 'color: white')
        labelusuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color:white')
        validUsuario = true

    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = ' Senha: Min 6 Caracteres '
        senha.setAttribute('style', 'border-color:red')
        validSenha = false

    }else{
        labelSenha.setAttribute('style', 'color: white')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color:white')
        validSenha = true

    }
})

confirmeSenha.addEventListener('keyup', () => {
    if(senha.value != confirmeSenha.value) {
        labelConfirmeSenha.setAttribute('style', 'color: red')
        labelConfirmeSenha.innerHTML = ' Confirmar Senha: Senha Diferente '
        confirmeSenha.setAttribute('style', 'border-color:red')
        validConfirmeSenha = false

    }else{
        labelConfirmeSenha.setAttribute('style', 'color: white')
        labelConfirmeSenha.innerHTML = 'Confirmar Senha'
        confirmeSenha.setAttribute('style', 'border-color:white')
        validConfirmeSenha = true

    }
})


function cadastrar(){
    if(validNome && validUsuario && validSenha && validConfirmeSenha)
    {   
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad:nome.value,
                userCad:usuario.value,
                senhaCad:senha.value,

            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSuccess.setAttribute('style', 'display:block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display:none')
        msgError.innerHTML = ''


        setTimeout(() => {
            window.location.href = 'https://rafaels-rocha.github.io/site-login-cadastro/'
        }, 3000)
        
    }
    else{
        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = '<strong> Preencha Corretamente<strong/>'
        msgSuccess.setAttribute('style', 'display:none')
        msgSuccess.innerHTML = ''
    }
}

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha',)

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type' , 'text')
    } else {
        inputSenha.setAttribute('type' , 'password')
    }
}) 

let btnC = document.querySelector('#verConfirmeSenha')

btnC.addEventListener('click', () => {
    let inputConfirmeSenha = document.querySelector('#confirmeSenha',)

    if(inputConfirmeSenha.getAttribute('type') == 'password'){
        inputConfirmeSenha.setAttribute('type' , 'text')
    } else {
        inputConfirmeSenha.setAttribute('type' , 'password')
    }
}) 

