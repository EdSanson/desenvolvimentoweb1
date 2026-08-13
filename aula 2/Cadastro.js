const mysql = require("mysql2");

//conexão com o MYSQL
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root" ,
    password: "root" ,
    database: "ecommerce" ,
})

//Dados que serão cadastrados
const nome = "Teclado";
const preco = 120.00 ;

//Comandos SQL
const insert = "INSERT INTO produtos(nome, preco) VALUES(?,?)";

// Envia os dado para o MYSQL
conexao.query(insert,[nome,preco], function (erro) {

    if (erro) {
        console.log("Erro ao cadastrar.");
        console.log(erro);
    }else {
        console.log("Aluno cadastrado com sucesso!");
    }
    conexao.end();
})


// ID do aluno que será excluído
