class evento{
    nome:string;
    data:string;
    horario:number;
    
    constructor(nome: string, data: string, horario: number){
        this.nome = nome;
        this.data = data;
        this.horario = horario;
    }
    }
    
    class agenda{
        private evento: evento[] = [];
        private visualizar: boolean = false;
        private remover: evento[] = [];
        private indiceAtual: number = 0;
    constructor(){
    
    }
    adicionarevento(adiciona : evento){
        this.evento.push(adiciona);
    }
    visualizarevento (){
        console.log("Meus eventos")
     for (let i=0; i< this.evento.length; i ++){
        console.log("ir no evento : "+this.evento[i].nome+" na data "+this.evento[i].data+"no horario : "+this.evento[i].horario );
       
     }
     
    }
    removerEvento(){
    if(this.visualizar == true){
      this.visualizar = false;
    
    }
    
    }
    
    meusEventos(){
        if(this.evento.length > 0){
            this.indiceAtual = (this.indiceAtual +1) % this.evento.length;
            return this, this.visualizarevento();
        }
        else{
            return "A agenta esta vazia"
        }
    }
    }
    
    let evento1 =new evento("fazer compras", "06/09" , 18.00);
    let evento2 =new evento("Ir ao salao", "10/09" , 14.00);
    let evento3 =new evento("Ir ao dentista", "15/09" , 15.00);
    
    const minhaAgenda  = new agenda();
    minhaAgenda.adicionarevento(evento1);
    minhaAgenda.adicionarevento(evento2);
    minhaAgenda.adicionarevento(evento3)
    console.log(minhaAgenda.visualizarevento());
    console.log(minhaAgenda.removerEvento());
    //console.log(minhaAgenda.meusEventos());