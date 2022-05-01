const CurrentAccount = require('./CurrentAccount')
const SavingsAccount = require('./ SavingsAccount')


const currentAccount = new CurrentAccount(11, 22, 0, 100);
currentAccount.deposit(10);
currentAccount.withdraw(110);
currentAccount.withdraw(1);

console.log();

const savingsAccount= new SavingsAccount(12, 33, 0);
savingsAccount.deposit(10);
savingsAccount.withdraw(10);
savingsAccount.withdraw(1);
