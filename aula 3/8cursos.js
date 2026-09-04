const mysql = require("mysql2");
const { CONNREFUSED } = require("node:dns");
const readline = require("readline-sync");

//conexão com MYSQL
const conexão = mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database: "instituicao"
});

// Função para cadastrar o aluno
function cadastrarCursos() {

    const curso = readline.question("Digite o nome do curso: ");
    const carga_horaria = readline.question("digite a carga horaria do curso: ");

    const insert = "INSERT INTO cursos (curso, carga_horaria) VALUES (?,?)";

    conexao.query(insert,[curso,carga_horaria], function(erro) {

        if (erro) {
            console.log("Erro no cadastro.");
            console.log(erro);
        }else {
            console.log("curso cadastrado com sucesso!");
        }
        
        menu()
    });
}
// função para excluir curso
function excliurCurso() {

    const id = readline.question("Digite o ID do curso: ");

    const deletar = "DELETE FROM cursos WHERE id = ?";

    conexão.query(deletar, [id], function (erro,resultado) {

        if (erro) {
            console.log("Erro ao excluir o curso. ");
        }else if (resultado.affectedRows === 0) {
            console.log("Curso não encontrado.");
        }else {
            console.log("Curso excluido com sucesso!");
        }

        menu();
        
    })
}

// Função para listar cursos
function listarCursos() {

    const sql = "SELECT * FROM cursos";

    conexão.query(sql, function (erro,cursos) {

        if (erro) {
            console.log("Erro ao buscar cursos.");
            console.log(erro);
        } else {
            console.log("\n--- CURSOS ---");
            cursos.forEach(function(curso) {
                console.log(
                    curso.id +" - " +
                    curso.curso + " - " +
                    curso.carga_horaria ,"horas"
                );
            });
        }
        menu();
    })
}


// Menu principal
function menu() {
    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar Curso");
    console.log("2- Excluir Curso");
    console.log("3 - Listar Cursos");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1 ) {

        cadastrarCursos();

    }else if (opcao === 2 ) {

        excliurCurso();

    } else if (opcao === 3 ) {

        listarCursos() ;

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