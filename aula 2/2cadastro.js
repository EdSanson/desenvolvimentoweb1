const mysql = require ("mysql2");

// conexão com MYSQL
const conexao = mysql.createConnection({
    host:  "localhost",
    user: "root",
    password: "root",
    database: "biblioteca"

})
//Dados que serão cadastrados
const titulo = "Introdução à Programação";
const autor = "Isaias Camilo e Álvaro Borges";

// Comandos SQL
const insert = "INSERT INTO livros (titulo, autor) VALUES (?,?)";

// Envia os dados para o MySQL
conexao.query(insert,[titulo,autor], function (erro) {

    if(erro){
        console.log("Erro ao cadastrar.");
        console.log(erro);
    } else {
        console.log("livro cadastrado com sucesso!");
    }

    conexao.end();
})

// Id do livro que será excluído
const id = 2
const deletar = "DELETE FROM livros WHERE id = ?";
conexao.query(deletar,[id], function (erro, resultado){

    if(erro) {
        console.log("Erro ao excluir o livro.");
        console.log(erro);
    }else if(resultado.affectedRows === 0) {
        console.log("livro não encontrado!");
    }else{
        console.log("livro excluído com sucesso"); 
    }
    conexao.end();
}) 

/*Uma biblioteca precisa organizar seu acervo de livros. Crie um banco de dados "biblioteca" e uma tabela chamada livros, contendo os campos id, titulo e autor.

Em seguida, desenvolva um programa em JavaScript para cadastrar os seguintes livros:

· Dom Casmurro — Machado de Assis;

· O Pequeno Príncipe — Antoine de Saint-Exupéry;

· Um terceiro livro de sua escolha.

Depois dos cadastros, exclua o livro que possui id igual a 2.

Por fim, consulte a tabela para verificar quais livros permaneceram cadastrados.*/