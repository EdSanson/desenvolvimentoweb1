const mysql = require("mysql2");

const readline = require("readline-sync");

//conexão com MYSQL
const conexao = mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database: "empresa"
});

// Funcão para cadastrar o funcionario
function cadastrarFuncionarios() {

    
        const nome = readline.question("Digite o nome do funcionario: ");
        const cargo = readline.question("Digite o cargo do funcionario: ");

        const insert = "INSERT INTO funcionarios(nome, cargo) VALUES (?,?)";

        conexao.query(insert,[nome,cargo], function(erro) {

           if (erro) {
            console.log("Erro no cadastro.");
            console.log(erro);
        }else {
            console.log("Funcionario cadastrado com sucesso!");
        }
        
        menu()
        });
}
// função para excluir funcionario
function excliurFuncionario() {
//função comfirmar exclusao
    const id = readline.question("Digite o ID do Funcionario: ");
    const confirmar = readline.question("Deseja realmente excluir este funcionario?(S/N):");

    if(confirmar.toUpperCase() === "S"){

    const deletar = "DELETE FROM funcionarios WHERE id = ?";

    conexao.query(deletar, [id], function (erro,resultado) {

        if (erro) {
            console.log("Erro ao excluir funcionario. ");
        }else if (resultado.affectedRows === 0) {
            console.log(" funcionario não encontrado.");
        }else {
            console.log(" funcionario excluido com sucesso!");
        }

        menu();
        
    })
    }else {
    console.log("Exclusao cancelada.");
    menu();
    }
}

// Função para listar funcionarios
function listarFuncionarios() {

    const sql = "SELECT * FROM funcionarios";

    conexao.query(sql, function (erro,funcionarios) {

        if (erro) {
            console.log("Erro ao buscar funcionarios.");
        } else {
            console.log("\n--- FUNCIONARIOS ---");
            funcionarios.forEach(function(funcionario) {
                console.log(
                    funcionario.id +" - " +
                    funcionario.nome + " - " +
                    funcionario.cargo
                );
            });
        }
        menu();
    })
}


// Menu principal
function menu() {
    console.log("\n===== FUNCIONARIOS =====");
    console.log("1 - Cadastrar funcionario");
    console.log("2 - Excluir funcionario");
    console.log("3 - Listar funcionarios");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1 ) {

        cadastrarFuncionarios();

    }else if (opcao === 2 ) {

        excliurFuncionario();

    } else if (opcao === 3 ) {

        listarFuncionarios() ;

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