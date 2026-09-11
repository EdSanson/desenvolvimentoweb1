CREATE DATABASE byteGuara;
USE byteGuara;

CREATE TABLE clientes (
    id_cliente INT AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    cidade VARCHAR(50),
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT PK_clientes PRIMARY KEY (id_cliente),
    CONSTRAINT UNQ_clientes_email UNIQUE (email)
) ENGINE=InnoDB;

SELECT * FROM clientes;



CREATE TABLE produtos (
    id_produto INT AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    categoria VARCHAR(100),
    preco DECIMAL(10, 2) NOT NULL,
    estoque INT NOT NULL,
    ativo BOOLEAN  DEFAULT TRUE,
  
    CONSTRAINT PK_produtos PRIMARY KEY (id_produto),
    CONSTRAINT CHK_preco_positivo CHECK (preco > 0),
    CONSTRAINT CHK_estoque_nao_negativo CHECK (estoque >= 0)
);


SELECT * FROM produtos;

CREATE TABLE vendas (
    id_venda INT AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL,
    data_venda DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT PK_vendas PRIMARY KEY (id_venda),
	CONSTRAINT FK_vendas_clientes FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
    CONSTRAINT FK_vendas_produtos FOREIGN KEY (id_produto) REFERENCES produtos(id_produto),
    CONSTRAINT CHK_quantidade_positiva CHECK (quantidade > 0)
) ENGINE=InnoDB;

SELECT * FROM vendas;

insert into clientes (nome, email,cidade)VALUES
('maria',' maria@email.com','guaramirim'),
('joao','joao@email.com','jaragua'),
('ana','ana@email.com','.guaramirim'),
('fabio','fabio@email.com','jaragua'),
('marcia',' marcia@email.com','guaramirim'),
('joaoP','joaoP@email.com','jaragua'),
('anaV','anaV@email.com','.guaramirim'),
('fabioL','fabioL@email.com','jaragua');

INSERT INTO produtos (nome,categoria,preco,estoque,ativo)VALUES
('teclado','leve',12.00,10,true),
('mouse','leve',12.00,19,true),
('calculadora','leve',12.00,10,true),
('monitor','leve',72.00,10,true),
('canetas','leve',22.00,20,true),
('lapis','leve',1.00,30,true),
('gabinete','leve',62.00,18,true),
('bolsa','leve',17.00,15,true),
('borracha','leve',14.00,15,true),
('pedal','leve',20.00,12,true),
('lupa','leve',15.00,10,true),
('marcador','leve',13.00,12,true);

INSERT INTO vendas; (nome,categoria,preco,estoque,ativo)VALUES
('teclado','leve',12.00,10,true),
('mouse','leve',12.00,19,true),
('calculadora','leve',12.00,10,true),
('monitor','leve',72.00,10,true),
('canetas','leve',22.00,20,true),
('lapis','leve',1.00,30,true),
('gabinete','leve',62.00,18,true),
('bolsa','leve',17.00,15,true),
('borracha','leve',14.00,15,true),
('pedal','leve',20.00,12,true),
('lupa','leve',15.00,10,true),
('marcador','leve',13.00,12,true);

INSERT INTO vendas (id_cliente,id_produto,quantidade)VALUES
(1,12,2),
(1,3,1),
(3,5,3),
(2,4,1),
(4,2,2),
(7,1,3),
(5,8,1),
(6,1,1),
(2,10,2),
(5,9,2),
(3,5,1),
(1,3,2),
(2,2,1);

SELECT * FROM vendas;
SELECT MIN(preco) AS menor_preco FROM produtos;

SELECT MAX(preco) AS maior_preco FROM produtos;

SELECT COUNT(*) AS total_produtos FROM produtos;

SELECT SUM(preco) AS total_preco FROM produtos;

SELECT AVG(preco) AS preco_medio FROM produtos;

SELECT COUNT(*) FROM clientes;

SELECT AVG(categoria) AS media_estoque FROM produtos;

SELECT SUM(quantidade) AS total_unidades_vendidas FROM vendas;