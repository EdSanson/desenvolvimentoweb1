CREATE DATABASE empresa;
USE empresa;

CREATE TABLE clientes (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome VARCHAR (100) not null,
    telefone VARCHAR (20) NOT NULL
);

SELECT * FROM clientes;

CREATE TABLE funcionarios (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome VARCHAR (100) not null,
    cargo VARCHAR (100) NOT NULL
    
);

SELECT * FROM funcionarios;

CREATE TABLE computadores (
 id INT AUTO_INCREMENT PRIMARY KEY,
 patrimonio VARCHAR(50),
 localizacao VARCHAR(100)
 );
 
 SELECT * FROM computadores;
 
 CREATE TABLE eventos ( 
 id INT AUTO_INCREMENT PRIMARY KEY,
 nome VARCHAR(100),
 data_evento DATE
 );
 
  SELECT * FROM eventos;
  
  CREATE TABLE veiculos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  modelo VARCHAR(100),
  placa VARCHAR(20)
  );
  
   SELECT * FROM veiculos; 
 