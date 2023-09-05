class Musica {
    titulo : string;
   artista:string;
   duracao: number;


constructor(titulo:string, artista:string, duracao:number){
    this.titulo = titulo;
    this.artista = artista;
    this.duracao = duracao;
  }
}
 class Playlist {
    private musicas: Musica[] = [];
    private reproduzindo: boolean = false;
    private indiceAtual: number = 0;
    constructor(){

    }

  adicionarMusica(musica: Musica){
    this.musicas.push(musica);
  }

    reproduzir (){
        if(this.musicas.length > 0){
           this.reproduzindo = true;
        return "Reproduzindo: " + this.musicas [this.indiceAtual].titulo + '-'
        + this.musicas [this.indiceAtual].artista;
        }
        else{
            return "A Playlist está vazia";
        }
    }

   pausar(){
    if(this.reproduzindo == true){
       this.reproduzindo = false;
       return "Música pausada";
    }
    else{
        return "Nenhuma Música está sendo reproduzida ";
    }
   }

    proxima(){
        if(this.musicas.length > 0){
          this.indiceAtual = (this.indiceAtual +1 ) % this.musicas.length;
          return this,this.reproduzir();
        }
        else{
            return " A Playlist está vazia";
        }
    }
 }

  const musica1 = new Musica("vai namorar comigo sim", " de     Henrique e juliano", 300);
  const musica2 = new Musica("enchated", "taylor swift", 200);
  const musica3 = new Musica("ETA", "New jeans", 500);

  const  minhaPlayList = new Playlist();
  minhaPlayList.adicionarMusica(musica1);
  minhaPlayList.adicionarMusica(musica2);
  minhaPlayList.adicionarMusica(musica3);
   console.log (minhaPlayList.reproduzir());
   console.log (minhaPlayList.pausar());
   console.log (minhaPlayList.proxima());
   console.log (minhaPlayList.proxima());
   console.log (minhaPlayList.proxima());
   
   
  