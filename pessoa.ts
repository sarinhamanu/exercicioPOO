class pessoa{
    nome:string;
    idade:number;
    comidas: string[];

constructor(nome: string, idade:number, comidas:string[]){
    this.nome = nome;
    this.idade = idade;
    this.comidas = comidas;

}
 
comprimentar(){
    let msgHabilitacao = "já posso tirar minha cnh";
    if(this.idade < 18)
    {
        msgHabilitacao = "não posso tirar minha cnh"
    }
    return "Olá, meu nome é  " + this.nome +" e tenho " +this.idade + " anos.  "+ msgHabilitacao + "."
}

comidasFavoritas(){
    console.log("Minha (s) comida (s) favorita(s)");
    for( let i=0; i< this.comidas.length; i ++){
        console.log(this.comidas[i]);

    }
}

}

let pessoa1= new pessoa("jhonhatan",19,["açai","strogonof"]);
console.log(pessoa1.comprimentar(),)
console.log(pessoa1.comidasFavoritas());