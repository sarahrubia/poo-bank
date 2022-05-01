"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const phisic_people_account_1 = require("./entitys/pf/phisic_people_account");
const juridic_people_account_1 = require("./entitys/pj/juridic_people_account");
// Conta Pessoa Física
const pedrosAccount = new phisic_people_account_1.phisicPeopleAccount(12312345678, 'Pedro Lucas', 'pedro@mail.com', 'pedrolucas', 0);
pedrosAccount.consultAmount();
pedrosAccount.addValueToAmount(5000);
pedrosAccount.consultAmount();
pedrosAccount.removeValueOfAmount(10000);
pedrosAccount.removeValueOfAmount(6550);
pedrosAccount.removeValueOfAmount(1);
console.log(pedrosAccount.getAmount);
console.log(pedrosAccount.getNumberOfAccount);
// Conta Pessoa Jurídica
const newtabAccount = new juridic_people_account_1.juridicPeopleAccount(12345678912345, 'Newtab Academy', 'newtab@newtab.com', 'newtabacademy', 0);
newtabAccount.consultAmount();
newtabAccount.addValueToAmount(5000);
newtabAccount.consultAmount();
newtabAccount.removeValueOfAmount(10000);
newtabAccount.removeValueOfAmount(6550);
newtabAccount.removeValueOfAmount(1);
console.log(newtabAccount.getAmount);
console.log(newtabAccount.getNumberOfAccount);
console.log(newtabAccount.getCnpj);
