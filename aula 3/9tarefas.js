const mysql = require("mysql2");
const { CONNREFUSED } = require("node:dns");
const readline = require("readline-sync");

//conexão com MYSQL
const conexao = mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database: "biblioteca"
});

// Função para cadastrar a tarefa
function cadastrarTarefa() {

    const descricao = readline.question("Digite a descricao da tarefa: ");
    if (descricao === "") {
            console.log("Impossivel cadastrar sem descricao!");
    

        const responsavel = readline.question("digite o responsavel pela tarefa: ");

        const insert = "INSERT INTO tarefas (descricao, responsavel) VALUES (?,?)";

        conexao.query(insert,[descricao,responsavel], function(erro) {

         if (erro) {
            console.log("Erro no cadastro.");
            console.log(erro);
         }else {
            console.log("tarefa cadastrada com sucesso!");
            }
     
        menu()
        });
    }
}

// função para excluir tarefa
function excliurTarefa() {

    const id = readline.question("Digite o ID do curso: ");

    const deletar = "DELETE FROM tarefas WHERE id = ?";

    conexao.query(deletar, [id], function (erro,resultado) {

        if (erro) {
            console.log("Erro ao excluir a tarefa. ");
        }else if (resultado.affectedRows === 0) {
            console.log("Tarefa não encontrada.");
        }else {
            console.log("Tarefa excluida com sucesso!");
        }

        menu();
        
    })
}

// Função para listar Tarefas
function listarTarefas() {

    const sql = "SELECT * FROM tarefas";

    conexao.query(sql, function (erro,tarefas) {

        if (erro) {
            console.log("Erro ao buscar tarefas.");
        } else {
            console.log("\n--- TAREFAS ---");
            tarefas.forEach(function(tarefa) {
                console.log(
                    tarefa.id +" - " +
                    tarefa.descricao + " - " +
                    tarefa.responsavel
                );
            });
        }
        menu();
    })
}


// Menu principal
function menu() {
    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar Tarefa");
    console.log("2- Excluir Tarefa");
    console.log("3 - Listar Tarefas");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1 ) {

        cadastrarTarefa();

    }else if (opcao === 2 ) {

        excliurTarefa();

    } else if (opcao === 3 ) {

        listarTarefas() ;

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