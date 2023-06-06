const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router();

const app = express();
app.use(express.json());
const porta = 3333;

const mulheres = [
	{
		id: '1',
		nome: 'Luara Kerlen',
		imagem: 'https://avatars.githubusercontent.com/u/26902816?v=4',
		miniBio: 'Desenvolvedora frontend',
	},
	{
		id: '2',
		nome: 'Luara Kerlen',
		imagem: 'https://avatars.githubusercontent.com/u/26902816?v=4',
		miniBio: 'Desenvolvedora frontend',
	},
	{
		id: '3',
		nome: 'Luara Kerlen',
		imagem: 'https://avatars.githubusercontent.com/u/26902816?v=4',
		miniBio: 'Desenvolvedora frontend',
	},
];

function mostraMulheres(request, response) {
	response.json(mulheres);
}

function criaMulher(request, response) {
	const novaMulher = {
		id: uuidv4(),
		nome: request.body.nome,
		imagem: request.body.imagem,
		miniBio: request.body.miniBio,
	};

	mulheres.push(novaMulher);
	response.json(mulheres);
}

function mostraPorta() {
	console.log(`Servidor criado e rodando na porta ${porta}`);
}

app.use(router.get('/mulheres', mostraMulheres));
app.use(router.post('/mulheres', criaMulher));
app.listen(porta, mostraPorta);
