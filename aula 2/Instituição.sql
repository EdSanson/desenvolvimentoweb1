CREATE database instituicao;
use instituicao;

create Table cursos(
	id INT primary KEY auto_increment NOT NULL,
    curso VARCHAR (100) not null,
    carga_horaria INT  NOT NULL
);

SELECT * FROM cursos;

