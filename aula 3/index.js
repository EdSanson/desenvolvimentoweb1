const mysql = require("mysql2");
const { CONNREFUSED } = require("node:dns");
const readline = require("readline-sync");

//conexão com MYSQL
const conexão = mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database: "escola"
});

// Função para cadastrar o aluno
function cadastrarAluno() {

    const nome = readline.question("Digite o nome do Aluno; ");
    const email = readline.question("digite o email do Aluno: ");

    const insert = "INSERT INTO alunos (nome, email) VALUES (?,?)";

    conexão.query(insert,[nome,email], function(erro) {

        if (erro) {
            console.log("Erro no cadastro.");
            console.log(erro);
        }else {
            console.log("Aluno cadastrado com sucesso!");
        }
        //menu()
    });
}
// função para excluir aluno
function excliurAluno() {

    const id = readline.question("Digite o ID do aluno: ");
}