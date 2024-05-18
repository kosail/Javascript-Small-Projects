import {Account} from './Account.js';

export class DebitAccount extends Account {
	#minimumBalance;

	constructor(accountID, holder, minimumBalance) {
		super(accountID, holder);
		this.#minimumBalance = minimumBalance;
	}

	setMinimumBalance(amount) {
		this.#minimumBalance = parseFloat(amount);
	}

	getMinimumBalance() {
		return this.#minimumBalance;
	}

	deposit(amount) {
		super.deposit(amount);
	}

	withdraw(amount) {
		amount = parseFloat(amount);
		if (this.getBalance() - amount < this.#minimumBalance) {
			super.withdraw(amount + 100);
			return;
		}
		
		super.withdraw(amount);
	}

	toString() {
		return super.toString() + "\t" + "Cta. Débito";
	}

}