CREATE DATABASE locadora;
use locadora;

CREATE TABLE filmes(
	id INT primary KEY auto_increment NOT NULL,
    titulo VARCHAR (100) not null,
    ano INT  NOT NULL
);

SELECT * FROM filmes;

CREATE TABLE jogos(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100),
 genero VARCHAR(50)
 );
 
 SELECT * FROM jogos;
