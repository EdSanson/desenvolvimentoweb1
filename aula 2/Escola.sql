CREATE DATABASE escola1;

USE escola1;

CREATE TABLE alunos(
	id INT primary KEY auto_increment NOT NULL,
    nome VARCHAR (100),
    email VARCHAR (100),
    endereco VARCHAR(100),
    matricula VARCHAR(100),
	curso VARCHAR(100),
    serie VARCHAR(100)
);

SELECT * FROM alunos;