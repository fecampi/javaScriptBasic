const Account = require('./Account')

function SavingsAccount(agency, account, balance) {
    Account.call(this, agency, account, balance);
}

// Herança
SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

module.exports = SavingsAccount