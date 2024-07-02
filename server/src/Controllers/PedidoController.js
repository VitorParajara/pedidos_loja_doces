import { response } from "express";
import PedidoModel from "../Models/PedidoModel.js";

class PedidoController {
    constructor() {
    }

    create(req, res) {
        const descricao = req.body.descricao;
        const valor = req.body.valor;
        const id_cliente = req.body.id_cliente;
        PedidoModel.create(descricao, valor, id_cliente).then(
            resposta => {
                console.debug("Inserindo Pedido");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: Inserindo Pedido");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req, res) {
        PedidoModel.read().then(
            resposta => {
                console.debug("Mostrando Pedido");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: Mostrando Pedido");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req, res) {
        const id_pedido = req.params.id_pedido;
        const descricao = req.body.descricao;
        const valor = req.body.valor;
        const id_cliente = req.body.id_cliente;

        PedidoModel.update(id_pedido, descricao, valor, id_cliente).then(
            resposta => {
                console.debug("Atualizando Pedidos");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: Atualizando Pedidos");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req, res) {
        const id_pedido = req.params.id_pedido;

        PedidoModel.delete(id_pedido).then(
            resposta => {
                console.debug("Pedido Deletado");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: Pedido Deletado");
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }
}

export default new PedidoController();