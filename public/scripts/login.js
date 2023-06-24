const URL = "http://localhost:3000/auth/login"

const formLogin = document.querySelector('#formLogin')

formLogin.addEventListener('submit', (e) => {
    // Evitar que o form atualize automaticamente
    e.preventDefault()

    // Recuperar valores do email e senha
    const email = document.querySelector('#inputEmail').value
    const password = document.querySelector('#inputPassword').value

    const data = {
        email: email,
        password: password
    }

    // Fazer uma requisicao ao back enviando email e senha
    fetch(URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then(data => {
            console.log("Login com sucesso. ", data)
        })
        .catch(err => {
            console.error('Erro ao fazer login: ', err)
        })
})
