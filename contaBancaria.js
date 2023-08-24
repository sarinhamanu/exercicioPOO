"use strict";
class banco {
    constructor(nome, saldo) {
        this.nome = nome;
        this.saldo = saldo;
    }
    depositar(deposito) {
        this.saldo = this.saldo + deposito;
        return " o (a) " + this.nome + " depositou R$: " + deposito + " agora seu novo saldo é de R$: " + this.saldo;
    }
    sacar(saque) {
        if (this.saldo > saque) {
            this.saldo = this.saldo - saque;
            return " saque de R$ " + saque + " realizado com sucesso,agora seu novo saldo é " + this.saldo;
        }
        else {
        }
        return " saque não realizado ,saldo insuficiente ";
    }
    consultar() {
        return " o saldo atual da sua conta e de R$: " + this.saldo;
    }
}
let banco1 = new banco(" João ", 1000);
console.log(banco1.consultar());
console.log(banco1.depositar(500));
console.log(banco1.sacar(100));
console.log(banco1.consultar());
let banco2 = new banco(" Maria ", 2500);
console.log(banco2.consultar());
console.log(banco2.depositar(1000));
console.log(banco2.sacar(450));
console.log(banco2.consultar());
let banco3 = new banco(" joaquina ", 3000);
console.log(banco3.consultar());
console.log(banco3.depositar(500));
console.log(banco3.sacar(3500));
console.log(banco3.consultar());
