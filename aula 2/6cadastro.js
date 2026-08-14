const mysql = require("mysql2");
 
//conexão com o MYSQL
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "locadora"
})
 
//Dados que serão cadastrados
const titulo = "Interestelar";
const ano = 2014;
 
//Comandos SQL
const insert = "INSERT INTO filmes (titulo, ano) VALUES (?,?)";
 
//Envia os dados para o MySQL
conexao.query(insert,[titulo, ano], function (erro) {
 
    if (erro){
        console.log("Erro ao cadastrar.");
        console.log(erro);
    } else {
        console.log("filme cadastrado com sucesso!");
    }
 
    conexao.end();
})
 
//ID do aluno que será excluído
/*const id = 1;
const deletar = "DELETE FROM  filmes WHERE id = ?";
 
conexao.query(deletar, [id], function (erro, resultado) {
 
    if(erro) {
        console.log("Erro ao excluir o filme.");
        console.log(erro);
    }else if(resultado.affectedRows === 0) {
        console.log("Filme não encontrado!");
    }else{
        console.log("Filme excluído com sucesso");
    }
 
    conexao.end();
});
 

/*Uma locadora deseja organizar os filmes disponíveis em seu catálogo. Crie uma tabela chamada filmes, contendo os campos id, titulo e ano.

Desenvolva um programa em JavaScript para cadastrar os seguintes filmes:

· Interestelar — 2014;

· Avatar — 2009;

· Toy Story — 1995.

Depois, consulte os registros da tabela para descobrir o id do filme Avatar e faça sua exclusão.

Por fim, cadastre outro filme de sua preferência e consulte novamente a tabela.*/