const mysql = require("mysql2");
 
//conexão com o MYSQL
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "empresa"
})
 
//Dados que serão cadastrados
const nome = "Juliana Costa";
const telefone = "47977770000";
 
//Comandos SQL
const insert = "INSERT INTO clientes (nome, telefone) VALUES (?,?)";
 
//Envia os dados para o MySQL
conexao.query(insert,[nome, telefone], function (erro) {
 
    if (erro){
        console.log("Erro ao cadastrar.");
        console.log(erro);
    } else {
        console.log("cliente cadastrado com sucesso!");
    }
 
    conexao.end();
})
 
//ID do aluno que será excluído
const id = 1;
const deletar = "DELETE FROM  clientes WHERE id = ?";
 
conexao.query(deletar, [id], function (erro, resultado) {
 
    if(erro) {
        console.log("Erro ao excluir o cliente.");
        console.log(erro);
    }else if(resultado.affectedRows === 0) {
        console.log("Cliente não encontrado!");
    }else{
        console.log("Cliente excluído com sucesso");
    }
 
    conexao.end();
});
 

/*Uma empresa deseja registrar os dados básicos de seus clientes. Crie uma tabela chamada clientes, contendo os campos id, nome e telefone.

Desenvolva um programa em JavaScript para cadastrar os seguintes clientes:

· Ana Souza — 47999990000;

· Pedro Lima — 47988880000;

· Juliana Costa — 47977770000.

Depois, consulte a tabela para descobrir o id de Pedro Lima e exclua esse cliente.

Em seguida, tente excluir novamente o mesmo id. Caso o cliente não exista, o programa deverá apresentar a mensagem:

Cliente não encontrado.*/