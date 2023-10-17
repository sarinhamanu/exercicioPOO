enum StatusPedido{
    AguardandoPreparo = "Aguardando o Preparo",
   Preparo = "Em preparo",
    SaiuParaEntrega = "Saiu Para Entrega ",
    Entregue ="Produto Entregue", 
   
}
class ProdutoPedido{
    nome: string;
    valor: number;
    constructor(nome:string, valor:number){
        this.nome= nome;
        this.valor= valor;
    }
}
class Pedido{
    private produtos: ProdutoPedido[];
    private status: StatusPedido;

   constructor(){
    this.produtos= [];
    this.status= StatusPedido.AguardandoPreparo;
    
   }
   adicionarProduto(produto: ProdutoPedido){
  this.produtos.push(produto);
   }
   atualizarStatus(status: StatusPedido){
    this.status = status;
   }
   exibirStatus(){
    return this.status;
   }

   exibirProdutoDoPedido(){
    console.log("exibir produto do pedido")
    for (let i=0; i< this.produtos.length; i ++){
       console.log("exibir produto : "+this.produtos[i].nome+" tem o preço de: "+this.produtos[i].valor);
   }
    }

}

let produtoP1 = new  ProdutoPedido('camisa' , 50);
let produtoP2 = new  ProdutoPedido('tenis' , 150);
let produtoP3 = new  ProdutoPedido('maquiagem' , 200);


const meuPedido  = new Pedido();
meuPedido.adicionarProduto(produtoP1);
meuPedido.adicionarProduto(produtoP2);
meuPedido.adicionarProduto(produtoP3);
console.log("Statudo atual do pedido:"+meuPedido.exibirStatus());
meuPedido.atualizarStatus(StatusPedido.AguardandoPreparo);
console.log("Statudo atual do pedido: "+meuPedido.exibirStatus());
meuPedido.exibirProdutoDoPedido();




