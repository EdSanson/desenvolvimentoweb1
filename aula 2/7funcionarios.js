const mysql = require ("mysql2");

//conexão com o MYSQL
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "empresa"
})

//Dados que serão cadastrados
/*const nome = "Lucas";
const cargo = "Atendente";
const salario = 2200.00 ;
//Comandos SQL
const insert = "INSERT INTO funcionarios (nome, cargo, salario) VALUES (?,?,?)";

//Envia os dados para o MySQL
conexao.query(insert,[nome, cargo, salario], function (erro) {

        if (erro) {
             console.log("Erro ao cadastrar.");
             console.log(erro);
        } else {
            console.log("Funcionário cadastrao com sucesso!");
        }

        conexao.end()
        
})*/

//ID do aluno que será excluído
const id = 50;
const deletar = "DELETE FROM  funcionarios WHERE id = ?";
 
conexao.query(deletar, [id], function (erro, resultado) {
 
    if(erro) {
        console.log("Erro ao excluir o funcionário.");
        console.log(erro);
    }else if(resultado.affectedRows === 0) {
        console.log("Funcionário não encontrado!");
    }else{
        console.log("Funcionário excluído com sucesso");
    }
 
    conexao.end();
});

/*Uma empresa precisa registrar informações sobre seus funcionários. Crie uma tabela chamada funcionarios, contendo os campos id, nome, cargo e salario.

Desenvolva um programa em JavaScript para cadastrar os seguintes funcionários:

· João — Vendedor — R$ 2.500,00;

· Mariana — Gerente — R$ 4.500,00;

· Lucas — Atendente — R$ 2.200,00.

Depois, exclua o funcionário que possui id igual a 3.

Em seguida, tente excluir um funcionário com id igual a 50. Caso ele não exista, apresente uma mensagem informando que o funcionário não foi encontrado.

Por fim, cadastre um novo funcionário de sua escolha.*/