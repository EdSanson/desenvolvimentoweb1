const mysql = require("mysql2");

const readline = require("readline-sync");

//conexão com MYSQL
const conexao = mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database: "laboratorio_avaliacao"
});

// Funcao para cadastrar o computador
function cadastrarcomputador() {

    
        const patrimonio = readline.question("Digite o patrimonio do computador: ");
        const localizacao = readline.question("Digite a localizacao do computador: ");
        const responsavel = readline.questions("Digite o responsavel pelo computador:");
        const condicao = readline.questions("Didite a condicao do computador");

        const insert = "INSERT INTO computador(patrimonio, localizacao, responsavel,condicao) VALUES (?,?,?,?)";

        conexao.query(insert,[modelo, placa], function(erro) {

           if (erro) {
            console.log("Erro no cadastro.");
            console.log(erro);
        }else {
            console.log("Computador cadastrado com sucesso!");
        }
        
        menu()
        });
}
// funcao para excluir computador
function excliurComputador() {
//funcao comfirmar exclusao
    const id = readline.question("Digite o ID do Computador: ");

    const confirmar = readline.question("Deseja realmente excluir este Computador?(S/N):");
    
    if(confirmar.toUpperCase() === "S"){

    const deletar = "DELETE FROM computador WHERE id = ?";

    conexao.query(deletar, [id], function (erro, resultado) {

        if (erro) {
            console.log("Erro ao excluir o Computador. ");
        }else if (resultado.affectedRows === 0) {
            console.log(" Computador nao encontrado.");
        }else {
            console.log(" Computador excluido com sucesso!");
        }

        menu();
        
    })
    }else {
    console.log("Exclusao cancelada.");
    menu();
    }
}

// Funcao para listar Computador
function listarComputador() {

    const sql = "SELECT * FROM veiculos";

    conexao.query(sql, function (erro,computador) {

        if (erro) {
            console.log("Erro ao buscar o computador.");
        } else {
            console.log("\n===== COMPUTADOR =====");
            veiculos.forEach(function(computador) {
                console.log(
                    computador.id +" - " +
                    computador.patrimonio + " - " +
                    computador.localizacao +" - " +
                    computador.responsavel +" - " +
                    computador.condicao
                );
            });
        }
        menu();
    })
}


// Menu principal
function menu() {
    console.log("\n===== CONTROLE DO LABORATORIO =====");
    console.log("1 - Cadastrar computador");
    console.log("2 - Listar computador");
    console.log("3 - Atualizar computador");
    console.log("4 - Excluir computador");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1 ) {

        cadastrarVeiculo();

    }else if (opcao === 2 ) {

        excliurVeiculo();

    } else if (opcao === 3 ) {

        listarVeiculos() ;

    } else if (opcao === 0 ) {

        console.log("Programa encerrado.");

        conexao.end();

    } else {

        console.log("Opcao Invalida.");

        menu();
    }
}


// Inicia o Programa

menu();