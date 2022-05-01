
import { phisicPeopleAccount } from './entitys/pf/phisic_people_account';
import { juridicPeopleAccount } from './entitys/pj/juridic_people_account';

const pedrosAccount = new phisicPeopleAccount(
    'Pedro Lucas',
    1550,
);

pedrosAccount.consultAmount();
pedrosAccount.addValueToAmount(5000);
pedrosAccount.consultAmount();
pedrosAccount.removeValueOfAmount(10000);
pedrosAccount.removeValueOfAmount(6550);
pedrosAccount.removeValueOfAmount(1);

console.log(pedrosAccount.getAmount);
console.log(pedrosAccount.getNumberOfAccount);
