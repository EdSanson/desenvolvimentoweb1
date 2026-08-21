CREATE DATABASE escola1;

USE escola1;

CREATE TABLE alunos(
	id INT primary KEY auto_increment NOT NULL,
    nome VARCHAR (100) NOT NULL,
    email VARCHAR (100) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    matricula VARCHAR(100) NOT NULL,
	curso VARCHAR(100) NOT NULL,
    serie VARCHAR(100) NOT NULL
);

SELECT * FROM alunos;
