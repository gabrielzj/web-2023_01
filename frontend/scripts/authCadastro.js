const BASE_URL = 'http://localhost:3000/'

const formCadastro = document.querySelector('#formCadastro')

async function signup(nome, email, senha) {
	try {
		const response = await fetch(BASE_URL + 'auth/signup', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				CadNome: nome,
				CadEmail: email,
				CadSenha: senha,
			})
		})
	
		const data = await response.json()

		console.log(data)
	} catch (error) {
		console.error('Erro ao cadastrar usuario: ', error)
	}
}

formCadastro.addEventListener('submit', (e) => {
	e.preventDefault()
	
	const nome = document.querySelector('#inputNome').value
	const email = document.querySelector('#inputEmail').value
	const senha = document.querySelector('#inputPassword').value

	signup(nome, email, senha)
})
