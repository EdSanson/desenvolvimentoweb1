const mysql = require("mysql2");

const readline = require("readline-sync");

//conexão com MYSQL
const conexao = mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database: "biblioteca"
});

// Funcão para cadastrar o livro
function cadastrarLivro() {

    
        const titulo = readline.question("Digite o titulo do Livro: ");
        const autor = readline.question("Digite o autor do Livro: ");

        const insert = "INSERT INTO livros(titulo, autor) VALUES (?,?)";

        conexao.query(insert,[titulo, autor], function(erro) {

           if (erro) {
            console.log("Erro no cadastro.");
            console.log(erro);
        }else {
            console.log("Livro cadastrado com sucesso!");
        }
        
        menu()
        });
}
// função para excluir livro
function excluirLivro() {

    const id = readline.question("Digite o ID do livro: ");

    const deletar = "DELETE FROM livros WHERE id = ?";

    conexao.query(deletar, [id], function (erro,resultado) {

        if (erro) {
            console.log("Erro ao excluir o Livro. ");
            console.log(erro);
        }else if (resultado.affectedRows === 0) {
            console.log(" Livro não encontrado.");
        }else {
            console.log(" Livro excluido com sucesso!");
        }

        menu();
        
    })
}

// Função para listar produtos
function listarLivro() {

    const sql = "SELECT * FROM livros";

    conexao.query(sql, function (erro,livros) {

        if (erro) {
            console.log("Erro ao buscar livros.");
        } else {
            console.log("\n--- LIVROS ---");
            livros.forEach(function(livro) {
                console.log(
                    livro.id +" - " +
                    livro.titulo + " - " +
                    livro.autor
                );
            });
        }
        menu();
    })
}


// Menu principal
function menu() {
    console.log("\n===== BIBLIOTECA =====");
    console.log("1 - Cadastrar Livro");
    console.log("2 - Excluir Livro");
    console.log("3 - Listar Livros");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1 ) {

        cadastrarLivro();

    }else if (opcao === 2 ) {

        excluirLivro();

    } else if (opcao === 3 ) {

        listarLivro() ;

    } else if (opcao === 0 ) {

        console.log("Programa encerrado.");

        conexao.end();

    } else {

        console.log("Opção Invalida.");

        menu();
    }
}


// Inicia o Programa

menu();
