const mysql = require("mysql2");

const readline = require("readline-sync");

//conexão com MYSQL
const conexao = mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database: "locadora"
});

// Funcão para cadastrar o filme
function cadastrarFilmes() {

    
        const titulo = readline.question("Digite o titulo do filme:0 ");
        const ano = readline.question("Digite o ano do filme: ");

        const insert = "INSERT INTO filmes(titulo, ano) VALUES (?,?)";

        conexao.query(insert,[titulo, ano], function(erro) {

           if (erro) {
            console.log("Erro no cadastro.");
            console.log(erro);
        }else {
            console.log("Filme cadastrado com sucesso!");
        }
        
        menu()
        });
}
// função para excluir filme
function excliurFilme() {

    const id = readline.question("Digite o ID do Filme: ");

    const deletar = "DELETE FROM filmes WHERE id = ?";

    conexao.query(deletar, [id], function (erro,resultado) {

        if (erro) {
            console.log("Erro ao excluir o filme. ");
        }else if (resultado.affectedRows === 0) {
            console.log(" filme não encontrado.");
        }else {
            console.log(" filme excluido com sucesso!");
        }

        menu();
        
    })
}

// Função para listar filmes
function listarFilmes() {

    const sql = "SELECT * FROM filmes";

    conexao.query(sql, function (erro,filmes) {

        if (erro) {
            console.log("Erro ao buscar filmes.");
        } else {
            console.log("\n--- FILMES ---");
            filmes.forEach(function(filme) {
                console.log(
                    filme.id +" - " +
                    filme.titulo + " - " +
                    filme.ano
                );
            });
        }
        menu();
    })
}


// Menu principal
function menu() {
    console.log("\n===== FilmES =====");
    console.log("1 - Cadastrar filme");
    console.log("2 - Excluir filme");
    console.log("3 - Listar filme");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1 ) {

        cadastrarFilmes();

    }else if (opcao === 2 ) {

        excliurFilme();

    } else if (opcao === 3 ) {

        listarFilmes() ;

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