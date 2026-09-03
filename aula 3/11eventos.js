const mysql = require("mysql2");

const readline = require("readline-sync");

//conexão com MYSQL
const conexao = mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database: "empresa"
});

// Funcão para cadastrar o evento
function cadastrarEvento() {

    
        const nome = readline.question("Digite o nome do Evento: ");
        const data_evento = readline.question("Digite a data do Evento: ");

        const insert = "INSERT INTO eventos(nome , data_evento) VALUES (?,?)";

        conexao.query(insert,[nome , data_evento], function(erro) {

           if (erro) {
            console.log("Erro no cadastro.");
            console.log(erro);
        }else {
            console.log("evento cadastrado com sucesso!");
        }
        
        menu()
        });
}
// função para excluir evento
function excliurEvento() {
//função comfirmar exclusao
    const id = readline.question("Digite o ID do Evento: ");
    const confirmar = readline.question("Deseja realmente excluir este Evento?(S/N):");

    if(confirmar.toUpperCase() === "S"){

    const deletar = "DELETE FROM eventos WHERE id = ?";

    conexao.query(deletar, [id], function (erro, resultado) {

        if (erro) {
            console.log("Erro ao excluir o Evento. ");
        }else if (resultado.affectedRows === 0) {
            console.log(" Evento não encontrado.");
        }else {
            console.log(" Evento excluido com sucesso!");
        }

        menu();
        
    })
    }else {
    console.log("Exclusao cancelada.");
    menu();
    }
}

// Função para listar Eventos
function listarEventos() {

    const sql = "SELECT * FROM eventos";

    conexao.query(sql, function (erro,eventos) {

        if (erro) {
            console.log("Erro ao buscar o evento.");
        } else {
            console.log("\n--- EVENTOS ---");
            eventos.forEach(function(evento) {
                console.log(
                    evento.id +" - " +
                    evento.nome + " - " +
                    evento.data_evento
                );
            });
        }
        menu();
    })
}


// Menu principal
function menu() {
    console.log("\n===== EVENTOS =====");
    console.log("1 - Cadastrar evento");
    console.log("2 - Excluir evento");
    console.log("3 - Listar eventos");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1 ) {

        cadastrarEvento();

    }else if (opcao === 2 ) {

        excliurEvento();

    } else if (opcao === 3 ) {

        listarEventos() ;

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