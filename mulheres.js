const express = require('express');
const router = express.Router();

const app = express();
const porta = 3333;

const mulheres = [
	{
		nome: 'Luara Kerlen',
		imagem: 'https://avatars.githubusercontent.com/u/26902816?v=4',
		minibio: 'Desenvolvedora frontend',
	},
	{
		nome: 'Luara Kerlen',
		imagem: 'https://avatars.githubusercontent.com/u/26902816?v=4',
		minibio: 'Desenvolvedora frontend',
	},
	{
		nome: 'Luara Kerlen',
		imagem: 'https://avatars.githubusercontent.com/u/26902816?v=4',
		minibio: 'Desenvolvedora frontend',
	},
];

function mostraMulheres(request, response) {
	response.json(mulheres);
}

function mostraPorta() {
	console.log(`Servidor criado e rodando na porta ${porta}`);
}

app.use(router.get('/mulheres', mostraMulheres));
app.listen(porta, mostraPorta);
