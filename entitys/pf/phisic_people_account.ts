import {Account} from '../account';
import { IPhisicPeople } from '../interfaces/phisic_people_interface';
import { IAccount } from '../interfaces/account_interface';

export class phisicPeopleAccount extends Account implements IAccount, IPhisicPeople {
    // Polimorfismo
    // Adicionando um novo atributo que não tinha
    cpf:number;
    name: string;
    email:string;

    //  Criar um construtor para sobescrever o 
    // construtor da classe pai Account
    constructor (
        cpf:number,
        name:string,
        email:string,
        nameOfHolder:string,
        amount:number,
    ){
        // Chamada da classe pai com super() e passagem dos parâmetros
        super(nameOfHolder, amount);
        //  Passando novo atributo
        this.cpf = cpf;
        this.name = name;
        this.email = email;
    }

    getCpf():number {
        return this.cpf;
        }
}