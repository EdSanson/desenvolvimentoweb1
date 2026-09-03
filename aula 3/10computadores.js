const mysql = require("mysql2");

const readline = require("readline-sync");

//conexão com MYSQL
const conexao = mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database: "empresa"
});

// Funcão para cadastrar o compotador
function cadastrarComputador() {

    
        const patrimonio = readline.question("Digite o patrimonio do computador: ");
        const localizacao = readline.question("Digite a localizacao do computador: ");

        const insert = "INSERT INTO computadores(patrimonio, localizacao) VALUES (?,?)";

        conexao.query(insert,[patrimonio, localizacao], function(erro) {

           if (erro) {
            console.log("Erro no cadastro.");
            console.log(erro);
        }else {
            console.log("computador cadastrado com sucesso!");
        }
        
        menu()
        });
}
// função para excluir computador
function excliurComputador() {
//função comfirmar exclusao
    const id = readline.question("Digite o ID do computador: ");
    const confirmar = readline.question("Deseja realmente excluir este computador?(S/N):");

    if(confirmar.toUpperCase() === "S"){

    const deletar = "DELETE FROM computadores WHERE id = ?";

    conexao.query(deletar, [id], function (erro, resultado) {

        if (erro) {
            console.log("Erro ao excluir computador. ");
        }else if (resultado.affectedRows === 0) {
            console.log(" computador não encontrado.");
        }else {
            console.log(" computador excluido com sucesso!");
        }

        menu();
        
    })
    }else {
    console.log("Exclusao cancelada.");
    menu();
    }
}

// Função para listar computadores
function listarComputadores() {

    const sql = "SELECT * FROM computadores";

    conexao.query(sql, function (erro,computadores) {

        if (erro) {
            console.log("Erro ao buscar funcionarios.");
        } else {
            console.log("\n--- COMPUTADORES ---");
            computadores.forEach(function(computador) {
                console.log(
                    computador.id +" - " +
                    computador.patrimonio + " - " +
                    computador.localizacao
                );
            });
        }
        menu();
    })
}


// Menu principal
function menu() {
    console.log("\n===== COMPUTADORES =====");
    console.log("1 - Cadastrar computador");
    console.log("2 - Excluir computador");
    console.log("3 - Listar computadores");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1 ) {

        cadastrarComputador();

    }else if (opcao === 2 ) {

        excliurComputador();

    } else if (opcao === 3 ) {

        listarComputadores() ;

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