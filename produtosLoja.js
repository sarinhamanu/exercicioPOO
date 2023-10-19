"use strict";
class ProdutoLoja {
    constructor(nomeDoProduto, precoDoProduto) {
        this.nome = nomeDoProduto;
        this.preco = precoDoProduto;
    }
}
class CarrinhoDeCompra {
    constructor() {
        this.produtosDoCarrinho = [];
    }
    adicionarProduto(produto) {
        this.produtosDoCarrinho.push(produto);
    }
    excluirProduto(nomeDoProduto) {
        this.produtosDoCarrinho = this.produtosDoCarrinho.filter((item) => item.nome !== nomeDoProduto);
    }
    excluirProduto2(produto) {
        this.produtosDoCarrinho.filter((item) => item.nome !== produto.nome);
    }
    calcularValorTotal() {
        let soma = 0;
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            soma = soma + this.produtosDoCarrinho[i].preco;
        }
        return soma.toFixed(2);
    }
    exibirProduto() {
        console.log("produtos do Carrinho");
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            console.log("produto: " + this.produtosDoCarrinho[i].nome + "R$" + this.produtosDoCarrinho[i].preco.toFixed(2));
        }
    }
}
class Loja {
    constructor() {
        this.produtosDoEstoque = [];
        this.carrinhoDeCompra = new CarrinhoDeCompra();
    }
    adicionarProdutoEstoque(produto) {
        this.produtosDoEstoque.push(produto);
    }
    removerProdutoEstoque(produto) {
        this.produtosDoEstoque = this.produtosDoEstoque.filter(item => item.nome !== produto.nome);
    }
    adicionarProdutoAoCarrinho(produto) {
        const produtoEncontrado = this.produtosDoEstoque.find(item => item.nome == produto.nome);
        if (produtoEncontrado) {
            this.carrinhoDeCompra.adicionarProduto(produto);
            return "Produto adicionado ao carrinho de compras";
        }
        else {
            return "Produto não encontrado no estoque";
        }
    }
    removerProdutoDoCarrinho(produto) {
        this.carrinhoDeCompra.excluirProduto2(produto);
    }
    exibirProdutoCarrinho() {
        this.carrinhoDeCompra.exibirProduto();
    }
}
//Criando produtos
const ProdutoLoja1 = new ProdutoLoja("camiseta", 150);
const ProdutoLoja2 = new ProdutoLoja("calça", 180);
const ProdutoLoja3 = new ProdutoLoja("sapato", 230);
const ProdutoLoja4 = new ProdutoLoja("bota", 250);
const ProdutoLoja5 = new ProdutoLoja("bone", 50);
//criando a loja
const minhaLoja = new Loja();
//adicionando produto ao Estoque
minhaLoja.adicionarProdutoEstoque(ProdutoLoja1);
minhaLoja.adicionarProdutoEstoque(ProdutoLoja2);
minhaLoja.adicionarProdutoEstoque(ProdutoLoja3);
minhaLoja.adicionarProdutoEstoque(ProdutoLoja4);
minhaLoja.adicionarProdutoEstoque(ProdutoLoja5);
//adicionando produto ao carrinho
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja1);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja2);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja3);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja4);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja5);
//remover produto o carrinho de compra
minhaLoja.removerProdutoDoCarrinho(ProdutoLoja1);
//Remover Produto do Estoque da Loja
minhaLoja.adicionarProdutoEstoque(ProdutoLoja1);
//exibindo Produto do Carrinho de Compra
minhaLoja.exibirProdutoCarrinho();
//Exibindo Valor total do carrinho
console.log("Total de carrinho de compra : R$ " + minhaLoja.carrinhoDeCompra.calcularValorTotal());
