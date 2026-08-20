const mysql = require("mysql2");
const { CONNREFUSED } = require("node:dns");
const readline = require("readline-sync");

//conexão com MYSQL
const conexão = mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database: "escola1"
});

// Função para cadastrar o aluno
function cadastrarAluno() {

    const nome = readline.question("Digite o nome do Aluno; ");
    const email = readline.question("Digite o email do Aluno: ");
    const endereco = readline.question("Digite o Endereco do aluno: ");
    const matricula = readline.question("Digite a matricula do aluno: ");
    const curso = readline.question("Digite o curso do aluno: ");
    const serie = readline.question("Digite a Serie: ");
    const insert = "INSERT INTO alunos (nome, email, endereco, matricula, curso, serie) VALUES (?,?,?,?,?,?)";

    conexão.query(insert,[nome,email,endereco, matricula, curso,serie], function(erro) {

        if (erro) {
            console.log("Erro no cadastro.");
            console.log(erro);
        }else {
            console.log("Aluno cadastrado com sucesso!");
        }
        
        menu()
    });
}
// função para excluir aluno
function excliurAluno() {

    const id = readline.question("Digite o ID do aluno: ");

    const deletar = "DELETE FROM alunos WHERE id = ?";

    conexão.query(deletar, [id], function (erro,resultado) {

        if (erro) {
            console.log("Erro ao excluir o aluno. ");
        }else if (resultado.affectedRows ===0) {
            console.log("Aluno não encontrado.");
        }else {
            console.log("aluno excluido com sucesso!");
        }

        menu();
        
    })
}

// Função para listar alunos
function listarAlunos() {

    const sql = "SELECT * FROM alunos";

    conexão.query(sql, function (erro,alunos) {

        if (erro) {
            console.log("Erro ao buscar alunos.");
        } else {
            console.log("\n--- ALUNOS ---");
            alunos.forEach(function(aluno) {
                console.log(
                    aluno.id +" - " +
                    aluno.nome + " - " +
                    aluno.email
                );
            });
        }
        menu();
    })
}


// Menu principal
function menu() {
    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar aluno");
    console.log("2- Excluir aluno");
    console.log("3 - Listar aluno");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1 ) {

        cadastrarAluno();

    }else if (opcao === 2 ) {

        excliurAluno();

    } else if (opcao === 3 ) {

        listarAlunos() ;

    } else if (opcao === 0 ) {

        console.log("Programa encerrado.");

        conexão.end();

    } else {

        console.log("Opção Invalida.");

        menu();
    }
}


// Inicia o Programa

menu();

