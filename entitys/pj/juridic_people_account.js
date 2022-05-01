"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juridicPeopleAccount = void 0;
const account_1 = require("../account");
class juridicPeopleAccount extends account_1.Account {
    //  Criar um construtor para sobescrever o 
    // construtor da classe pai Account
    constructor(cnpj, name, email, nameOfHolder, amount) {
        // Chamada da classe pai com super() e passagem dos parâmetros
        super(nameOfHolder, amount);
        //  Passando novo atributo
        this.cnpj = cnpj;
        this.name = name;
        this.email = email;
    }
    get getCnpj() {
        return this.cnpj;
    }
}
exports.juridicPeopleAccount = juridicPeopleAccount;
