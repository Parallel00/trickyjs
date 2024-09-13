function createAccount(pin, amount = 0) {
	return{
		chkBalance(input){
			if (input !== pin) return "The PIN you entered is invalid.";
			return `$${amount}`;
		},
		deposit(input, newAmt){
			if (input !== pin) return "The PIN you entered is invalid.";
			amount += newAmt;
			return `Deposited successfully.  Your new balance is $${amount}`;
		},
		withdraw(input, amtToWithdraw){
			if (input !== pin) return "The PIN you entered is invalid.";
			if (amtToWithdraw > amount){
				return "Insufficient funds.  Transaction has been cancelled.";
			}
			amount -= amtToWithdraw;
			return `Transaction successful.  Your new balance is $${amount}`;
		},
		changePin(oldPin, newPin){
			if (oldPin !== pin) return "The PIN you entered is invalid.";
			pin == newPin;
			return "PIN changed successfully.";
		}
	};
}

module.exports = { createAccount };
