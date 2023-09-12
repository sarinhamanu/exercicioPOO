"use strict";
class ProdutoLoja {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class carinhoDeCompra {
    constructor() {
        this.lista = [];
    }
    adicionarProduto(Produto) {
        this.lista.push(Produto);
    }
    remover(produto) {
        this.lista = this.lista.filter((item) => item.nome !== produto.nome);
        return "produto deletado";
    }
    calcular() {
        let soma = 0;
        this.lista.forEach(item => { soma = soma + item.preco; });
        //for(let i=0; i< this.lista.length; i++){
        //   soma = soma + this.lista[i].preco;}
        return soma;
    }
}
class Loja {
    constructor() {
        this.estoqueProdutos = [];
        this.carrinho = new carinhoDeCompra();
    }
    adicionarProdutoEstoque(produto) {
        this.estoqueProdutos.push(produto);
    }
    removerProdutoEstoque(produto) {
        this.estoqueProdutos = this.estoqueProdutos.filter(item => item.nome !== produto.nome);
        return "Produto removido do estoque da loja";
    }
    adicionarCarrinho(produto) {
        const produtoEncontrado = this.estoqueProdutos.find(item => item.nome == produto.nome);
        if (produtoEncontrado) {
            this.carrinho.adicionarProduto(produto);
            return "Produto adicionado ao carrinho de compras";
        }
        else {
            return "Produto não encontrado no estoque";
        }
    }
    removerProdutoDoCarrinho(produto) {
        this.carrinho.remover(produto);
        return "Produto removido do carrinho ";
    }
    exibirProduto(produto) {
        console.log("exibir produto");
        for (let i = 0; i < this.carrinho.lista.length; i++) {
            console.log("exibir produto : " + this.carrinho.lista[i].nome + " tem o preço de: " + this.carrinho.lista[i].preco);
        }
    }
}
let produtos1 = new ProdutoLoja("kit de maquiagem", 250);
let produtos2 = new ProdutoLoja("kit de brinco", 200);
let produtos3 = new ProdutoLoja("vestido", 250);
const produtosNoCarrinho = new carinhoDeCompra();
produtosNoCarrinho.adicionarProduto(produtos1);
produtosNoCarrinho.adicionarProduto(produtos2);
produtosNoCarrinho.adicionarProduto(produtos3);
