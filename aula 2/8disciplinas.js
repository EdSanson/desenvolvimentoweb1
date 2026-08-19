const mysql = require("mysql2");
 
//conexão com o MYSQL
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "escola"
})

//Dados que serão cadastrados
const nome = "Recursos Humanos";
const professor = "Karen";
const aulas_semanais = 6
 
//Comandos SQL
const insert = "INSERT INTO disciplinas (nome, professor, aulas_semanais) VALUES (?,?,?)";
 
//Envia os dados para o MySQL
conexao.query(insert,[nome, professor, aulas_semanais], function (erro) {
 
    if (erro){
        console.log("Erro ao cadastrar.");
        console.log(erro);
    } else {
        console.log("Disciplina cadastrada com sucesso!");
    }
 
    conexao.end();
})
 
//ID do aluno que será excluído
/*const id = 2;
const deletar = "DELETE FROM  disciplinas WHERE id = ?";
 
conexao.query(deletar, [id], function (erro, resultado) {
 
    if(erro) {
        console.log("Erro ao excluir a disciplina.");
        console.log(erro);
    }else if(resultado.affectedRows === 0) {
        console.log("Disciplina não encontrada!");
    }else{
        console.log("Disciplina excluída com sucesso");
    }
 
    conexao.end();
});
 

/*Uma escola deseja registrar as disciplinas oferecidas, o nome do professor responsável e a quantidade de aulas semanais. Crie uma tabela chamada disciplinas, contendo os campos id, nome, professor e aulas_semanais.

Desenvolva um programa em JavaScript para cadastrar as seguintes disciplinas:

· Banco de Dados — Carlos — 4 aulas semanais;

· Programação — Fernanda — 5 aulas semanais;

· Análise de Dados — Maria — 3 aulas semanais.

Depois, exclua a disciplina que possui id igual a 2.

Em seguida, cadastre uma nova disciplina de sua escolha e consulte todos os registros da tabela.*/