const express = require('express');
const router = express.Router();

const app = express();
const porta = 3333;

function mostraMulher(request, response) {
	response.json({
		nome: 'Luara Kerlen',
		imagem: 'https://avatars.githubusercontent.com/u/26902816?v=4',
		miniBio: 'Desenvolvedora frontend',
	});
}

function mostraPorta() {
	console.log(`Servidor criado e rodando na porta ${porta}`);
}

app.use(router.get('/mulher', mostraMulher));
app.listen(porta, mostraPorta);
