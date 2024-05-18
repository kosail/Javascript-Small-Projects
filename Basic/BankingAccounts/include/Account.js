export class Account {
	#accountID;
	#holder;
	#balance;

	constructor(accountID, holder) {
		// Since there is not way in JS to create abstract classes (Classes that cannot be directly instanciated) we can replicate the behavour throwing an Exception-like error when trying to create an Account object.
		// For this, we use new.target
		if (new.target === Account) {
			throw new Error("Account object cannot be directly instanciated!");
		}

		this.#accountID = accountID;
		this.#holder = holder;
		this.#balance = 0;
	}

	setAccountID(accountID) {
		this.#accountID = accountID;
	}

	setHolder(holder) {
		this.#holder = holder;
	}

	getAccountID() {
		return this.#accountID;
	}

	getHolder() {
		return this.#holder;
	}

	getBalance() {
		return this.#balance;
	}

	getAverageBalance() {
		return this.#balance / 30;
	}

	deposit(amount) {
		amount = parseFloat(amount);
		if (amount <= 0) {
			throw new Error("Amount cannot be zero or less!");
		}

		this.#balance += amount;
	}

	withdraw(amount) {
		amount = parseFloat(amount);
		if (amount > this.#balance) {
			throw new Error("Amount cannot be more than the actual balance of the account!");
		}

		this.#balance -= amount;
	}

	toString() {
		return this.#accountID + "\t" + this.#holder;
	}
}