const Account = require('./Account')

function CurrentAccount(agency, account, balance, limite) {
  Account.call(this, agency, account, balance);
  this.limite = limite;
}

// Herança
CurrentAccount.prototype = Object.create(Account.prototype);
CurrentAccount.prototype.constructor = CurrentAccount;

///polimorfismo
CurrentAccount.prototype.withdraw = function (valor) {
  if (valor > (this.balance + this.limite)) {
    console.log(`Saldo insuficiente: ${this.balance}`);
    return;
  }

  this.balance -= valor;
  this.getBalance();
};

function CurrentAccount(agency, account, balance) {
  Account.call(this, agency, account, balance);
}

module.exports = CurrentAccount;