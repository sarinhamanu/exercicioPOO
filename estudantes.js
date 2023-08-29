"use strict";
class estudante {
    constructor(nome, idade, notas) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }
    calcularMedia() {
        let totalDeNotas = 0;
        let media = 0;
        for (let i = 0; i < this.notas.length; i++) {
            totalDeNotas = totalDeNotas + this.notas[i];
        }
        media = totalDeNotas / this.notas.length;
        if (media >= 7) {
            return "parabens," + this.nome + "sua media e " + media + " e voce esta aprovado(a).";
        }
        else {
            return this.nome + "sua media é " + media + " e voce precisa estudar mais para melhorar seu desempenho";
        }
    }
}
let estudante1 = new estudante("maria", 16, [6, 7, 9]);
console.log(estudante1.calcularMedia());
