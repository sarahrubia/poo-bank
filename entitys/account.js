"use strict";
// É uma boa prática nomear a classe com o nome do arquivo
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    // A classe tem construtores
    function Account(nameOfHolder, amount) {
        // Passando valores dos construtores para os atributos 
        this._numberOfAccount = this.generateNumberOfAccount();
        this.nameOfHolder = nameOfHolder;
        this._amount = amount;
    }
    Object.defineProperty(Account.prototype, "getAmount", {
        // Acessando valores privados
        get: function () {
            return this._amount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "getNumberOfAccount", {
        get: function () {
            return this._numberOfAccount;
        },
        enumerable: false,
        configurable: true
    });
    // Métodos
    // Diferença protected e private: 
    // private é visto apenas pela classe;
    // protected é visto pela própria classe e heranças da classe.
    Account.prototype.generateNumberOfAccount = function () {
        return Math.floor(Math.random() * 1000) + 1;
    };
    Account.prototype.consultAmount = function () {
        var response = "Seu saldo atual \u00E9: ".concat(this._amount);
        console.log(response);
        return response;
    };
    Account.prototype.addValueToAmount = function (value) {
        // this.amount = this.amount + value;
        this._amount = this._amount += value;
        console.log(this._amount);
    };
    Account.prototype.removeValueOfAmount = function (value) {
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
    };
    return Account;
}());
exports.Account = Account;
