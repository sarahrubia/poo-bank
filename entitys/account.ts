// É uma boa prática nomear a classe com o nome do arquivo

export class Account{
    // A classe tem atributos
    private _numberOfAccount:number; 
    // private (e underline antes do atributo) é utilizado para tornar uma informação privada.
    // Essa propriedade só é acessível na classe
    nameOfHolder:string;
    private _amount:number;

    // A classe tem construtores
    constructor(
        nameOfHolder:string,
        amount:number,
    ) {
        // Passando valores dos construtores para os atributos 
        this._numberOfAccount = this.generateNumberOfAccount();
        this.nameOfHolder = nameOfHolder;
        this._amount = amount;
    }

    // Acessando valores privados

    get getAmount():number {
        return this._amount;
    }

    get getNumberOfAccount():number {
        return this._numberOfAccount
    }

    // Métodos

    // Diferença protected e private: 
    // private é visto apenas pela classe;
    // protected é visto pela própria classe e heranças da classe.

    protected generateNumberOfAccount():number {
        return Math.floor(Math.random()*1000) +1;
    }

    consultAmount():string {
        let response = `Seu saldo atual é: ${this._amount}`;
        console.log(response)
        return response
    }
    addValueToAmount(value:number):void {
        // this.amount = this.amount + value;
        this._amount = this._amount += value;
        console.log(this._amount)
    }

    removeValueOfAmount(value:number):boolean {
        if (this._amount <= 0) {
            console.log('ERRO: Você não possui saldo.');
            return false;
        } else if (value > this._amount){
            console.log('ERRO: Saldo insuficiente.');
            return false;
        } else {
            // this.amount = this.amount - value;
            this._amount -= value;
            console.log('SUCESSO: Operação realizada.');
        
            return true;
        }

    }
}