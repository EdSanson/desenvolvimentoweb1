const mysql = require("mysql2");
 
//conexão com o MYSQL
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "instituicao"
})
 
//Dados que serão cadastrados
const curso = "Administração";
const carga_horaria = "800";
 
//Comandos SQL
const insert = "INSERT INTO cursos (curso, carga_horaria) VALUES (?,?)";
 
//Envia os dados para o MySQL
conexao.query(insert,[curso, carga_horaria], function (erro) {
 
    if (erro){
        console.log("Erro ao cadastrar.");
        console.log(erro);
    } else {
        console.log("Curso cadastrado com sucesso!");
    }
 
    conexao.end();
})
 
//ID do curso que será excluído
const id = 2;
const deletar = "DELETE FROM  cursos WHERE id = ?";
 
conexao.query(deletar, [id], function (erro, resultado) {
 
    if(erro) {
        console.log("Erro ao excluir o curso.");
        console.log(erro);
    }else if(resultado.affectedRows === 0) {
        console.log("Curso não encontrado!");
    }else{
        console.log("Curso excluído com sucesso");
    }
 
    conexao.end();
});
 

/*Uma instituição de ensino precisa registrar os cursos oferecidos e suas respectivas cargas horárias. Crie uma tabela chamada cursos, contendo os campos id, nome e carga_horaria.

Desenvolva um programa em JavaScript para cadastrar os seguintes cursos:

· Desenvolvimento de Sistemas — 1200 horas;

· Informática — 1000 horas;

· Administração — 800 horas.

Depois dos cadastros, exclua o curso que possui id igual a 3.

Em seguida, cadastre um novo curso de sua escolha e consulte todos os registros da tabela.*/