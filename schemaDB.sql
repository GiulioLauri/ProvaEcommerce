drop database demo;
create database demo;
use demo;
CREATE TABLE UTENTE (
    cod int unsigned not null auto_increment,
    username varchar(20),
    password varchar(44),
    mail varchar(50)
);