// Superclass
function Account(agency, account, balance) {
    this.agency = agency;
    this.account = account;
    this.balance = balance;
  }
  
  Account.prototype.withdraw = function(value) {
    if(value > this.balance) {
      console.log(`Saldo insuficiente: ${this.balance}`);
      return;
    }
  
    this.balance -= value;
    this.getBalance();
  };
  
  Account.prototype.deposit = function(value) {
    this.balance += value;
    this.getBalance();
  };
  
  Account.prototype.getBalance = function() {
    console.log(
      `Ag/c: ${this.agency}/${this.account} | ` +
      `balance: R$${this.balance.toFixed(2)}`
    );
  };

  module.exports = Account