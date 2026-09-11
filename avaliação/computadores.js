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
        const responsavel = readline.question("Digite o responsavel pelo computador: ");
        const condicao = readline.question("Digite a condicao do computador: ");

        const insert = "INSERT INTO computadores(patrimonio, localizacao, responsavel,condicao) VALUES (?,?,?,?)";

        conexao.query(insert,[patrimonio, localizacao, responsavel,condicao], function(erro) {

           if (erro) {
            console.log("Erro no cadastro.");
            console.log(erro);
        }else {
            console.log("Computador cadastrado com sucesso!");
        }
        
        menu()
        });
}

// Funcao para atualizar o computador
function atualiarcomputador() {
 
// ID do aluno que será atualizado
    const id = readline.question("Digite o ID do Computador: ");
 
    const update = `
    UPDATE computadores
    SET localizacao = ?, responsavel = ?, condicao = ?
    WHERE id = ?
    `;
    conexao.query(update, [localizacao, responsavel, condicao, id], function (erro, resultado) {
 
     if (erro) {
        console.log("Erro ao atualizar o computador.");
        console.log(erro);
         } else if (resultado.affectedRows === 0) {
        console.log("computador não encontrado.");
        } else {
        console.log("computador atualizado com sucesso!");
        }
 
        menu();
    });

}
// funcao para excluir computador
function excliurComputador() {
//funcao comfirmar exclusao
    const id = readline.question("Digite o ID do Computador: ");

    const confirmar = readline.question("Deseja realmente excluir este Computador?(S/N):");
    
    if(confirmar.toUpperCase() === "S"){

    const deletar = "DELETE FROM computadores WHERE id = ?";

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

    const sql = "SELECT * FROM computadores";

    conexao.query(sql, function (erro,computadores) {

        if (erro) {
            console.log("Erro ao buscar o computador.");
        } else {
            console.log("\n===== COMPUTADOR =====");
            computadores.forEach(function(computador) {
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

        cadastrarcomputador();

    }else if (opcao === 2 ) {

        listarComputador();

    } else if (opcao === 3 ) {

        atualizarComputador() ;


    } else if (opcao === 4 ) {

        excliurComputador() ;

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