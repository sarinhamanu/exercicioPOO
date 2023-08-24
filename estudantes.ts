class estudante{
    nome:string;
    idade:number;
    notas:number[];

constructor(nome:string,idade:number,notas:number[]){
    this.nome=nome;
    this.idade=idade;
    this.notas= notas;
}
calcularMedia(){
    let totalDeNotas=0
    let media=0
    for( let i=0; i< this.notas.length; i++){
        totalDeNotas=totalDeNotas+this.notas[i]
    }
     
media=totalDeNotas/this.notas.length;
   



}

}












