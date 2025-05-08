// Importa o módulo 'http' que permite criar um servidor HTTP
const http = require('http');
// Cria um servidor HTTP. O método 'createServer' recebe uma função de
callback
// que será executada toda vez que o servidor receber uma requisição.
const server = http.createServer((req, res) => {
 // Define o código de status da resposta como 200, indicando sucesso
 res.statusCode = 200;
 /* Define o cabeçalho da resposta para informar que o conteúdo será text
o simples*/
 res.setHeader('Content-Type', 'text/plain');
 // Envia a resposta ao cliente com a mensagem 'Hello, World!'
 res.end('Hello, World!\\n');
});
// Define a porta em que o servidor vai rodar, neste caso, a porta 300
const port = 3000;
// Inicia o servidor e o faz "escutar" requisições na porta especificada.
/*Quando o servidor começa a rodar, executa a função de callback para m
ostrar no console*/
// que o servidor está rodando e em qual endereço ele pode ser acessado.
server.listen(port, () => {
 console.log(`Servidor rodando em <http://localhost>:${port}/`);
});

const progressoTemporada = [3, 2, 0, 4, 1, 5, 0, 6, 2];

console.log(soma);
console.log(mediaPorDias);

const usuario = { nome: "Natalia", generoFavorito: "Suspense", temporadasConcluidas: 3,
episodiosAssistidos: 42, metaMensal: 50 };
