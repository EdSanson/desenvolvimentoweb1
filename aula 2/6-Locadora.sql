CREATE DATABASE locadora;
use locadora;

CREATE TABLE filmes(
	id INT primary KEY auto_increment NOT NULL,
    titulo VARCHAR (100) not null,
    ano INT  NOT NULL
);

SELECT * FROM filmes;