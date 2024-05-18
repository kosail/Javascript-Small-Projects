import {Account} from './Account.js';

export class CreditAccount extends Account {
	#creditLimit;

	constructor (accountID, holder, creditLimit) {
		super(accountID, holder);
		this.#creditLimit = creditLimit;
	}
	
	setCreditLimit (amount) {
		amount = parseFloat(amount);
		if (amount <= 0) {
			throw new Error("The credit limit cannot be zero or less!");
		}

		this.#creditLimit = amount;
		super.deposit(amount);
	}

	getCreditLimit () {
		return this.#creditLimit;
	}

	pay(amount) {
		amount = parseFloat(amount);
		if (super.getBalance == this.#creditLimit) {
			throw new Error("There is no current debt to pay.");
		}
		if (amount > this.#creditLimit) {
			super.deposit(this.#creditLimit - amount);
		} else {
			super.deposit(amount);
		}
	}

	charge(amount) {
		amount = parseFloat(amount);

		if (amount <= 0) {
			throw new Error("Cannot charge zero or less!");
		}

		if (super.getBalance() - amount < 0) {
			super.withdraw (150);
			throw new Error("Credit Limit exceeded.");
		}

		super.withdraw(amount);
	}

	toString() {
		return super.toString() + "\t" + "Cta. Crédito";
	}

}