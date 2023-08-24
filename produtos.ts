class produto{
    nome: string;
    valor: number;


    constructor(nome:string, valor: number){
        this.nome=nome;
        this.valor=valor;
       
    }

   apresentar(){
return "O,produto  " +this.nome+ "  de " + this.valor ;


    }

    apresentardesconto(desconto:number){
return "Com desconto de " +desconto +" % "+ " vai ficar "+(this.valor -(desconto*this.valor)/100)
    }
}
 
let produto1 = new produto("Livro",  50);
console.log(produto1.apresentar());
console.log(produto1.apresentardesconto(15));

let produto2 = new produto("Vestido",  90);
console.log(produto2.apresentar());
console.log(produto2.apresentardesconto(10));

let produto3 = new produto("Tênis",  150);
console.log(produto3.apresentar());
console.log(produto3.apresentardesconto(20));





