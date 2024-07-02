import mysql from "mysql2"
import config from "../Config.js";

class ClienteModel {
    constructor() {
        this.conexao = mysql.createConnection(config.db);
    }

    create(nome_cliente,endereco) {
        let sql = `INSERT INTO clientes VALUES("${null}","${nome_cliente}","${endereco}");`;
        
       return new Promise((resolve,reject)=>{
        this.conexao.query(sql,(erro,retorno)=>{
            if(erro){
                reject([400,erro])
            }
            resolve([201,"Cliente Adicionado"])
        })
       });
    
    }

    read() {
        let sql = `SELECT * FROM clientes;`;
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }
                resolve([200,retorno])
            })
        });
    }

    update(id_cliente, nome_cliente, endereco) {
        let sql = `update clientes set nome_cliente="${nome_cliente}", endereco="${endereco}" where id_cliente = ${id_cliente};`;

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400],erro)
                }else if(retorno.affectedRows>0){
                    resolve([200],retorno)
                }else{
                    resolve([404,"Cliente não encontrado"])
                }
                
            })
        });
    }

    delete(id_cliente) {
        let sql = `DELETE FROM clientes WHERE id_cliente = ${id_cliente};`;

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400],erro)
                }else if(retorno.affectedRows>0){
                    resolve([200],retorno)
                }else{
                    resolve([404,"Cliente não encontrado"])
                }
            })
        });
    }
}

export default new ClienteModel();