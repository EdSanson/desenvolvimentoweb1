const mysql = require("mysql2");

const readline = require("readline-sync");

//conexão com MYSQL
const conexao = mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database: "empresa"
});

// Funcão para cadastrar o jogo
function cadastrarClientes() {

    
        const nome = readline.question("Digite o nome do Cliente; ");
        const telefone = readline.question("Digite o Telefone do Cliente: ");

        const insert = "INSERT INTO clientes(nome, telefone) VALUES (?,?)";

        conexao.query(insert,[nome, telefone], function(erro) {

           if (erro) {
            console.log("Erro no cadastro.");
            console.log(erro);
        }else {
            console.log("Cliente cadastrado com sucesso!");
        }
        
        menu()
        });
}
// função para excluir cliente
function excliurCliente() {

    const id = readline.question("Digite o ID do Cliente: ");

    const deletar = "DELETE FROM clientes WHERE id = ?";

    conexao.query(deletar, [id], function (erro,resultado) {

        if (erro) {
            console.log("Erro ao excluir o Cliente. ");
        }else if (resultado.affectedRows === 0) {
            console.log(" cliente não encontrado.");
        }else {
            console.log(" Cliente excluido com sucesso!");
        }

        menu();
        
    })
}

// Função para listar Clientes
function listarClientes() {

    const sql = "SELECT * FROM clientes";

    conexao.query(sql, function (erro,clientes) {

        if (erro) {
            console.log("Erro ao buscar jogos.");
        } else {
            console.log("\n--- CLIENTES ---");
            clientes.forEach(function(cliente) {
                console.log(
                    cliente.id +" - " +
                    cliente.nome + " - " +
                    cliente.telefone
                );
            });
        }
        menu();
    })
}


// Menu principal
function menu() {
    console.log("\n===== CLIENTES =====");
    console.log("1 - Cadastrar cliente");
    console.log("2 - Excluir cliente");
    console.log("3 - Listar cliente");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1 ) {

        cadastrarClientes();

    }else if (opcao === 2 ) {

        excliurCliente();

    } else if (opcao === 3 ) {

        listarClientes() ;

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