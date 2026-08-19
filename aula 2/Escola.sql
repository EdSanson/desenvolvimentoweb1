CREATE DATABASE escola;

USE escola;

CREATE TABLE professores (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100)NOT NULL,
disciplina VARCHAR (100) NOT NULL
);

SELECT * FROM professores;
CREATE TABLE alunos(
	id INT primary KEY auto_increment NOT NULL,
    nome VARCHAR (100) not null,
    email VARCHAR (100) NOT NULL
);

SELECT * FROM alunos;

