create database pedidos_loja_doces;
use pedidos_loja_doces;

create table pedidos(
id_pedido int auto_increment primary key not null,
descricao varchar(100) not null,
valor float not null,
id_cliente int not null,

foreign key (id_cliente) references clientes(id_cliente)
);

create table clientes(
id_cliente int auto_increment primary key not null,
nome_cliente varchar(50) not null,
endereco varchar(150) not null
);

insert into clientes values(
null,
"Ramon",
"Av. Carlos Dumon de Andrade, 210"
);

insert into pedidos values(
null,
"Bolo de Murangu (Fatia) e Suco",
12.56,
1
);

select * from clientes;
select * from pedidos;