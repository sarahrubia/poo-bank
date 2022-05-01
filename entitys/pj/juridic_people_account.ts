import {Account} from '../account';
import { IJuridicPeople } from '../interfaces/juridic_people_interface';
import { IAccount } from '../interfaces/account_interface';

export class juridicPeopleAccount extends Account implements IAccount, IJuridicPeople {
    // Polimorfismo
    // Adicionando um novo atributo que não tinha
    cnpj:number;
    name:string;
    email:string;

    //  Criar um construtor para sobescrever o 
    // construtor da classe pai Account
    constructor (
        cnpj:number,
        name:string,
        email:string,
        nameOfHolder:string,
        amount:number,
    ){
        // Chamada da classe pai com super() e passagem dos parâmetros
        super(nameOfHolder, amount);
        //  Passando novo atributo
        this.cnpj = cnpj;
        this.name = name;
        this.email = email;
    }

    get getCnpj():number {
    return this.cnpj;
    }
}
