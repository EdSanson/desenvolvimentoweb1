CREATE DATABASE loja;
use loja;

CREATE TABLE vendas(
	id INT primary KEY auto_increment NOT NULL,
    produto VARCHAR (100) not null,
	quantidade INT  NOT NULL,
	preco DECIMAL(10,2) NOT NULL
);

SELECT * FROM vendas;