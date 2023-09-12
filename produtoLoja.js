"use strict";
class ProdutoLoja {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class classCarrinhoDeCompras {
    constructor() {
        this.amarzenar = [];
    }
    adicionarProduto(ProdutoLoja) {
        this.amarzenar.push(ProdutoLoja);
    }
    removerProduto(ProdutoLoja) {
        this.amarzenar = this.amarzenar.filter((item) => item.nome !== ProdutoLoja.nome);
        return "produto deletado";
    }
    Calcular() {
        let soma = 0;
        this.amarzenar.forEach(item => { soma = soma + item.preco; });
        //for(let i=0; i< this.lista.length; i++){
        //   soma = soma + this.lista[i].preco;}
        return soma;
    }
}
const Produtos1 = new ProdutoLoja("maquiagem", 150);
const Produtos2 = new ProdutoLoja("camisa", 59, 90);
const Produtos3 = new ProdutoLoja("calça", 80);
