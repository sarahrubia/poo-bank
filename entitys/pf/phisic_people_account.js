"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phisicPeopleAccount = void 0;
const account_1 = require("../account");
class phisicPeopleAccount extends account_1.Account {
    //  Criar um construtor para sobescrever o 
    // construtor da classe pai Account
    constructor(cpf, name, email, nameOfHolder, amount) {
        // Chamada da classe pai com super() e passagem dos parâmetros
        super(nameOfHolder, amount);
        //  Passando novo atributo
        this.cpf = cpf;
        this.name = name;
        this.email = email;
    }
    getCpf() {
        return this.cpf;
    }
}
exports.phisicPeopleAccount = phisicPeopleAccount;
