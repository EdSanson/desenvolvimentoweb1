const mysql = require("mysql2");
 
//conexão com o MYSQL
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "loja"
})
 
//Dados que serão cadastrados
/*const produto = "Notebook";
const quantidade = 2;
const preco = 3500.00;
 
//Comandos SQL
const insert = "INSERT INTO vendas (produto, quantidade, preco) VALUES (?,?,?)";
 
//Envia os dados para o MySQL
conexao.query(insert,[produto, quantidade, preco], function (erro) {
 
    if (erro){
        console.log("Erro ao cadastrar a venda.");
        console.log(erro);
    } else {
        console.log("Venda cadastrada com sucesso!");
    }
 
    conexao.end();
})*/
 
//ID do aluno que será excluído
const id = 1;
const deletar = "DELETE FROM  vendas WHERE id = ?";
 
conexao.query(deletar, [id], function (erro, resultado) {
 
    if(erro) {
        console.log("Erro ao excluir a venda.");
        console.log(erro);
    }else if(resultado.affectedRows === 0) {
        console.log("Venda não encontrada!");
    }else{
        console.log("Venda excluída com sucesso");
    }
 
    conexao.end();
});

/*Uma loja deseja registrar suas vendas. Crie uma tabela chamada vendas, contendo os campos id, produto, quantidade e valor.

Depois, desenvolva um programa em JavaScript para cadastrar a seguinte venda:

· Produto: Notebook;

· Quantidade: 2;

· Valor unitário: R$ 3.500,00.

O programa deverá apresentar a mensagem:

Venda cadastrada com sucesso!

Em seguida, desenvolva outro código para excluir uma venda pelo id.

Caso a venda exista, apresente:

Venda excluída com sucesso!

Caso a venda não exista, apresente:

Venda não encontrada.

Ao final, consulte os registros da tabela para conferir o resultado das operações*/