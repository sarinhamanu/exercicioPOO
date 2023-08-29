class funcionario {
    nome:string;
    cargo:string;
    salario:number;
    inss: number = 11;
    ir: number = 7.5;

    constructor(nome: string, cargo: string, salario: number){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
       
       
       
    }
    apresentar() {
        return "Oi, eu sou " + this.nome + " eu estou no cargo de " + this.cargo + " e tenho um salario de R$ " + this.salario ;
    }

   

    aplicarimposto(){
        let valorINSS = (this.salario/100)*this.inss;
        let valorIR = ((this.salario - valorINSS)* this.ir)/100;
       
        return  (valorINSS + valorIR);
       
    }
   
    aplicarAumento(aumento: number){
        this.salario = (this.salario + (aumento*this.salario)/100)
       
        return "Aumento de " + aumento + "% " + " vai ficar " + this.salario

    }

    Retornar(){
        let impostos = this.aplicarimposto();
        let salarioLiquido = this.salario - impostos;
        return "Funcionario: " + this.nome + " Salario Bruto: " + this.salario + " Impostos a serem pagos: " + impostos + " Salario liquido: " + salarioLiquido
    }

   
}
let funcionarios1 = new funcionario("Ana Silva", "Analista de Vendas", 3000 );
console.log(funcionarios1.apresentar());
console.log("Total de impostos R$: "+funcionarios1.aplicarimposto());
console.log(funcionarios1.Retornar());
console.log("");
console.log(funcionarios1.aplicarAumento(10));
console.log(funcionarios1.Retornar());


let funcionarios2 = new funcionario("maria clara", "diretor", 20000 );
console.log(funcionarios2.apresentar());
console.log("Total de impostos R$: "+funcionarios2.aplicarimposto());
console.log(funcionarios2.Retornar());
console.log("");
console.log(funcionarios2.aplicarAumento(10));
console.log(funcionarios2.Retornar());

