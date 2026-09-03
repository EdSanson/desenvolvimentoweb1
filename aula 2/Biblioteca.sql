CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE livros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR (100) NOT NULL
);

SELECT * FROM livros;

CREATE TABLE tarefas (
 id INT AUTO_INCREMENT PRIMARY KEY,
 descricao VARCHAR(200) NOT NULL,
 responsavel VARCHAR(100) 
 );
 
SELECT * FROM tarefas; 