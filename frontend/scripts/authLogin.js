const BASE_URL = 'http://localhost:3000/'

const formLogin = document.querySelector('#formLogin')

async function login(email, senha) {
	try {
		const response = await fetch(BASE_URL + 'auth/login', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				LoginEmail: email,
				LoginSenha: senha
			})
		})
	
		const data = await response.json()

		console.log(data)
	} catch (error) {
		console.error('Erro ao fazer login: ', error)
	}
}

formLogin.addEventListener('submit', (e) => {
	e.preventDefault()
	
	const email = document.querySelector('#inputEmail').value
	const senha = document.querySelector('#inputPassword').value

	login(email, senha)
})
