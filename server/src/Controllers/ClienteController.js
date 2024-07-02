import { response } from "express";
import ClienteModel from "../Models/ClienteModel.js";

class ClienteController {
    constructor() {
    }
Cliente
    create(req, res) {
        const nome_cliente = req.body.nome_cliente;
        const endereco = req.body.endereco;
        ClienteModel.create(nome_cliente,endereco).then(
            resposta => {
                console.debug("Inserindo Cliente");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: Inserindo Cliente");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req, res) {
        ClienteModel.read().then(
            resposta => {
                console.debug("Mostrando Cliente");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: Mostrando Cliente");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req, res) {
        const id_cliente = req.params.id_cliente;
        const nome_cliente = req.body.nome_cliente;
        const endereco = req.body.endereco;

        ClienteModel.update(id_cliente,nome_cliente, endereco).then(
            resposta => {
                console.debug("Atualizando Clientes");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: Atualizando Clientes");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_cliente = req.params.id_cliente;
        
        ClienteModel.delete(id_cliente).then(
            resposta => {
                console.debug("Cliente Deletado");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: Cliente Deletado");
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }
}

export default new ClienteController();