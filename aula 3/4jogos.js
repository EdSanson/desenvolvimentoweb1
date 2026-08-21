const mysql = require("mysql2");

const readline = require("readline-sync");

//conexão com MYSQL
const conexao = mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database: "locadora"
});

// Funcão para cadastrar o jogo
function cadastrarJogo() {

    
        const nome = readline.question("Digite o nome do Jogo; ");
        const genero = readline.question("Digite o Genero do Jogo: ");

        const insert = "INSERT INTO jogos(nome, genero) VALUES (?,?)";

        conexao.query(insert,[nome, genero], function(erro) {

           if (erro) {
            console.log("Erro no cadastro.");
            console.log(erro);
        }else {
            console.log("Jogo cadastrado com sucesso!");
        }
        
        menu()
        });
}
// função para excluir Jogo
function excliurJogo() {

    const id = readline.question("Digite o ID do Jogo: ");

    const deletar = "DELETE FROM Jogos WHERE id = ?";

    conexao.query(deletar, [id], function (erro,resultado) {

        if (erro) {
            console.log("Erro ao excluir o Jogo. ");
        }else if (resultado.affectedRows === 0) {
            console.log(" Jogo não encontrado.");
        }else {
            console.log(" Jogo excluido com sucesso!");
        }

        menu();
        
    })
}

// Função para listar Jogo
function listarJogo() {

    const sql = "SELECT * FROM jogos";

    conexao.query(sql, function (erro,jogos) {

        if (erro) {
            console.log("Erro ao buscar jogos.");
        } else {
            console.log("\n--- JOGOS ---");
            jogos.forEach(function(jogo) {
                console.log(
                    jogo.id +" - " +
                    jogo.nome + " - " +
                    jogo.genero
                );
            });
        }
        menu();
    })
}


// Menu principal
function menu() {
    console.log("\n===== JOGOS =====");
    console.log("1 - Cadastrar jogo");
    console.log("2 - Excluir jogo");
    console.log("3 - Listar jogo");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1 ) {

        cadastrarJogo();

    }else if (opcao === 2 ) {

        excliurJogo();

    } else if (opcao === 3 ) {

        listarJogo() ;

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