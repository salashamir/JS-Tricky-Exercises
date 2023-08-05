function createAccount(pin, amount = 0) {
  return {
    checkBalance(userPIN) {
      if (userPIN !== pin) {
        return "Invalid PIN.";
      }
      return `$${amount}`;
    },
    deposit(userPIN, depositAmount) {
      if (userPIN !== pin) {
        return "Invalid PIN.";
      }
      amount += depositAmount;
      return `Succesfully deposited $${depositAmount}. Current balance: $${amount}.`;
    },
    withdraw(userPIN, withdrawalAmount) {
      if (userPIN !== pin) {
        return "Invalid PIN.";
      }
      if (withdrawalAmount > amount) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      }
      amount -= withdrawalAmount;
      return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${amount}.`;
    },
    changePin(oldPin, newPin) {
      if (oldPin !== pin) {
        return "Invalid PIN.";
      }
      pin = newPin;
      return "PIN successfully changed!";
    },
  };
}

module.exports = { createAccount };
