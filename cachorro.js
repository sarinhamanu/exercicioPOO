"use strict";
class Cachorro {
    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    apresentar() {
        return " oie,eu sou " + this.nome + " um " + this.raca + " de " + this.idade + " anos ";
    }
    apresentarpara(humano) {
        return "  Olá, " + humano + " eu sou " + this.nome + " um " + this.raca + " de " + this.idade + " anos ";
    }
}
let rex = new Cachorro("Rex,", "Labrador", 3);
let tozeti = new Cachorro("tozeti", "chihuahua", 17);
console.log(rex.nome);
console.log(tozeti.nome);
console.log(rex.apresentar());
console.log(tozeti.apresentarpara('Renan'));
