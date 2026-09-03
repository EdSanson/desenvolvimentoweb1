const mysql = require("mysql2");

const readline = require("readline-sync");

//conexão com MYSQL
const conexao = mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database: "empresa"
});

// Funcão para cadastrar o veiculo
function cadastrarVeiculo() {

    
        const modelo = readline.question("Digite o modelo do veiculo: ");
        const placa = readline.question("Digite a placa do veiculo: ");

        const insert = "INSERT INTO veiculos(modelo, placa) VALUES (?,?)";

        conexao.query(insert,[modelo, placa], function(erro) {

           if (erro) {
            console.log("Erro no cadastro.");
            console.log(erro);
        }else {
            console.log("veiculo cadastrado com sucesso!");
        }
        
        menu()
        });
}
// função para excluir veiculo
function excliurVeiculo() {
//função comfirmar exclusao
    const id = readline.question("Digite o ID do Veiculo: ");

    const confirmar = readline.question("Deseja realmente excluir este Veiculo?(S/N):");
    
    if(confirmar.toUpperCase() === "S"){

    const deletar = "DELETE FROM veiculos WHERE id = ?";

    conexao.query(deletar, [id], function (erro, resultado) {

        if (erro) {
            console.log("Erro ao excluir o Veiculo. ");
        }else if (resultado.affectedRows === 0) {
            console.log(" Veiculo não encontrado.");
        }else {
            console.log(" Veiculo excluido com sucesso!");
        }

        menu();
        
    })
    }else {
    console.log("Exclusao cancelada.");
    menu();
    }
}

// Função para listar Veiculos
function listarVeiculos() {

    const sql = "SELECT * FROM veiculos";

    conexao.query(sql, function (erro,veiculos) {

        if (erro) {
            console.log("Erro ao buscar o veiculo.");
        } else {
            console.log("\n--- VEICULOS ---");
            veiculos.forEach(function(veiculo) {
                console.log(
                    veiculo.id +" - " +
                    veiculo.modelo + " - " +
                    veiculo.placa
                );
            });
        }
        menu();
    })
}


// Menu principal
function menu() {
    console.log("\n===== VEICULOS =====");
    console.log("1 - Cadastrar veiculo");
    console.log("2 - Excluir veiculo");
    console.log("3 - Listar veiculos");
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

        console.log("Opção Invalida.");

        menu();
    }
}


// Inicia o Programa

menu();