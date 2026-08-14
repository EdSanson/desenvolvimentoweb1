CREATE DATABASE empresa;
USE empresa;

CREATE TABLE clientes (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome VARCHAR (100) not null,
    telefone VARCHAR (20) NOT NULL
);

SELECT * FROM clientes;