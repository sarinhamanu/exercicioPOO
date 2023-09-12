"use strict";
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class carrinhoDeCompra {
    constructor() {
        this.lista = [];
    }
    adicionarProduto(produto) {
        this.lista.push(produto);
    }
    remover(produto) {
        this.lista = this.lista.filter((item) => item.nome !== produto.nome);
        return "produto removido";
    }
    Calcular() {
        let soma = 0;
        this.lista.forEach(item => { soma = soma + item.preco; });
        //for(let i=0; i< this.lista.length; i++){
        //   soma = soma + this.lista[i].preco;}
        return soma;
    }
}
class Loja {
    constructor() {
        this.estoque = [];
        this.carrinho = new carrinhoDeCompra();
    }
    adicionarProdutoLoja(produto) {
        this.estoque.push(produto);
    }
    remover(produto) {
        this.estoque = this.estoque.filter((item) => item.nome !== produto.nome);
        return "produto removido do estoque da loja";
    }
    adicionarProdutoCarrinho(produto) {
        const produtoEncontrado = this.estoque.find(item => item.nome == produto.nome);
        if (produtoEncontrado) {
            this.carrinho.adicionarProduto(produto);
            return "Produto adicionado ao carrinho de compras";
        }
        else {
            return "Produto não encontrado no estoque";
        }
    }
    RemoverProdutoCarrinho(produto) {
        return this.carrinho.remover(produto);
        //return "produto removido do carrinho de compras";
    }
    exibirProduto() {
        console.log("exibir produto");
        for (let i = 0; i < this.carrinho.lista.length; i++) {
            console.log("exibir produto : " + this.carrinho.lista[i].nome + " tem o preço de: " + this.carrinho.lista[i].preco);
        }
    }
    exibirValorCarrinho() {
        return this.carrinho.Calcular();
    }
}
const produtos1 = new Produto("kit maquiagem", 250);
const produtos2 = new Produto("kit brinco", 100);
const produtos3 = new Produto("escova rotativa", 350);
const produtosCarrinho = new Loja();
produtosCarrinho.adicionarProdutoLoja(produtos1);
produtosCarrinho.adicionarProdutoLoja(produtos2);
produtosCarrinho.adicionarProdutoLoja(produtos3);
console.log(produtosCarrinho.remover(produtos1));
console.log(produtosCarrinho.adicionarProdutoCarrinho(produtos2));
console.log(produtosCarrinho.adicionarProdutoCarrinho(produtos3));
console.log(produtosCarrinho.RemoverProdutoCarrinho(produtos3));
console.log(produtosCarrinho.exibirProduto());
console.log(produtosCarrinho.exibirValorCarrinho());
console.log(produtosCarrinho.remover(produtos2));
console.log(produtosCarrinho.adicionarProdutoCarrinho(produtos2));
console.log(produtosCarrinho.adicionarProdutoCarrinho(produtos3));
console.log(produtosCarrinho.RemoverProdutoCarrinho(produtos3));
console.log(produtosCarrinho.exibirProduto());
console.log(produtosCarrinho.exibirValorCarrinho());
