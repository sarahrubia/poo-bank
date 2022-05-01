"use strict";
// É uma boa prática nomear a classe com o nome do arquivo
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
// Como a classe não está mais sendo referenciada em nenhum lugar e apenas as classes herdadas estão sendo utilizadas, esta se torna uma classe abstrata. Ela não pode mais ser diretamente instanciada.
class Account {
    // A classe tem construtores
    constructor(nameOfHolder, amount) {
        // Passando valores dos construtores para os atributos 
        this._numberOfAccount = this.generateNumberOfAccount();
        this.nameOfHolder = nameOfHolder;
        this._amount = amount;
    }
    // Acessando valores privados
    get getAmount() {
        return this._amount;
    }
    get getNumberOfAccount() {
        return this._numberOfAccount;
    }
    // Métodos
    openAccount() {
        if (this._numberOfAccount != null) {
            return true;
        }
        else {
            false;
        }
    }
    // modifyNumberOfAccount(){
    //     this._numberOfAccount = 0;
    // // como numberOfAccount foi setada para readonly, ela não pode ser alterada
    // }
    // Diferença protected e private: 
    // private é visto apenas pela classe;
    // protected é visto pela própria classe e heranças da classe.
    generateNumberOfAccount() {
        return Math.floor(Math.random() * 1000) + 1;
    }
    consultAmount() {
        let response = `Seu saldo atual é: ${this._amount}`;
        console.log(response);
        return response;
    }
    addValueToAmount(value) {
        // this.amount = this.amount + value;
        this._amount = this._amount += value;
        console.log(this._amount);
    }
    removeValueOfAmount(value) {
        if (this._amount <= 0) {
            console.log('ERRO: Você não possui saldo.');
            return false;
        }
        else if (value > this._amount) {
            console.log('ERRO: Saldo insuficiente.');
            return false;
        }
        else {
            // this.amount = this.amount - value;
            this._amount -= value;
            console.log('SUCESSO: Operação realizada.');
            return true;
        }
    }
}
exports.Account = Account;
