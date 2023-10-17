"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["AguardandoPreparo"] = "Aguardando o Preparo";
    StatusPedido["Preparo"] = "Em preparo";
    StatusPedido["SaiuParaEntrega"] = "Saiu Para Entrega ";
    StatusPedido["Entregue"] = "Produto Entregue";
})(StatusPedido || (StatusPedido = {}));
class ProdutoPedido {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedido {
    constructor() {
        this.produtos = [];
        this.status = StatusPedido.AguardandoPreparo;
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    atualizarStatus(status) {
        this.status = status;
    }
    exibirStatus() {
        return this.status;
    }
    exibirProdutoDoPedido() {
        console.log("exibir produto do pedido");
        for (let i = 0; i < this.produtos.length; i++) {
            console.log("exibir produto : " + this.produtos[i].nome + " tem o preço de: " + this.produtos[i].valor);
        }
    }
}
let produtoP1 = new ProdutoPedido('camisa', 50);
let produtoP2 = new ProdutoPedido('tenis', 150);
let produtoP3 = new ProdutoPedido('maquiagem', 200);
const meuPedido = new Pedido();
meuPedido.adicionarProduto(produtoP1);
meuPedido.adicionarProduto(produtoP2);
meuPedido.adicionarProduto(produtoP3);
console.log("Statudo atual do pedido:" + meuPedido.exibirStatus());
meuPedido.atualizarStatus(StatusPedido.AguardandoPreparo);
console.log("Statudo atual do pedido: " + meuPedido.exibirStatus());
meuPedido.exibirProdutoDoPedido();
