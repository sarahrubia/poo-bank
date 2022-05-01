export interface IAccount {
    // Atributos 
    nameOfHolder:string;

    // Adicionando os métodos que são obrigatórios na conta
    openAccount():boolean;
    consultAmount():string;
    addValueToAmount(value:number):void;
    removeValueOfAmount(value:number):boolean;
}