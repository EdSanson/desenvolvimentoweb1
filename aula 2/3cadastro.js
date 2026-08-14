const mysql = require("mysql2");
 
//conexão com o MYSQL
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "escola"
})
 
//Dados que serão cadastrados
const nome = "Fernanda";
const disciplina = "Progração";

 
//Comandos SQL
const insert = "INSERT INTO professores (nome, disciplina) VALUES (?,?)";
 
//Envia os dados para o MySQL
conexao.query(insert,[nome, disciplina], function (erro) {
 
    if (erro){
        console.log("Erro ao cadastrar.");
        console.log(erro);
    } else {
        console.log("Professor cadastrado com sucesso!");
    }
 
    conexao.end();
})
 
//ID do professor que será excluído
const id = 2;
const deletar = "DELETE FROM  professores WHERE id = ?";
 
conexao.query(deletar, [id], function (erro, resultado) {
 
    if(erro) {
        console.log("Erro ao excluir o professor.");
        console.log(erro);
    }else if(resultado.affectedRows === 0) {
        console.log("Professor não encontrado!");
    }else{
        console.log("Professor excluído com sucesso");
    }
 
    conexao.end();
});
 
/*Uma escola deseja armazenar os dados de seus professores. Crie um banco de dados chamado "escola" uma tabela chamada professores, contendo os campos id, nome e disciplina.

Desenvolva um programa em JavaScript para cadastrar os seguintes professores:

· Maria — Matemática;

· Carlos — Banco de Dados;

· Fernanda — Programação.

Depois, exclua o professor que possui id igual a 2.

Em seguida, tente excluir um professor com id igual a 20. Caso esse professor não exista, o programa deverá apresentar a mensagem:

Professor não encontrado*/

 