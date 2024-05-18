import {DebitAccount} from './include/DebitAccount.js';
import {CreditAccount} from './include/CreditAccount.js';

console.log(
	"+".padEnd(23, "-") + "+\n" + 
	"Banking account system\n" + 
	"+".padEnd(23, "-") + "+\n\n"
);


let accounts = [];
let counter = 0;

while (true) {

	let typeOfAccount = parseFloat(prompt("Register new debit or credit account?\n1) Debit\n2) Credit\n0) Exit"));

	if (isNaN(typeOfAccount) || typeOfAccount < 0 && typeOfAccount > 2) {
		throw new Error("Invalid account. Input a valid option;");
	}
	if (typeOfAccount == 0) break;

	let accountID = prompt("Input the account ID: ");
	let holder = prompt("Input the account holder's name:");

	console.log(`Processing account No.${counter + 1}...`);
	try {
		if (typeOfAccount == 1) {
			let minimumBalance = parseFloat(prompt("Input minimum amount of balance:"));
			let depositAmount = parseFloat(prompt("Enter initial deposit amount:"));

			accounts.push(new DebitAccount(accountID, holder, minimumBalance));
			accounts.at(-1).deposit(depositAmount);
		} else {
			let creditLimit = parseFloat(prompt("Input credit limit amount:"));
			accounts.push(new CreditAccount(accountID, holder, creditLimit));
		}


	} catch (e) {
		console.log(e);
	}

	counter++;
}

if (accounts.length > 0) {
	console.log("Registered accounts:\n");
	accounts.forEach(a => console.log(a.toString() + "\t" + a.getAverageBalance()));
} else {
	console.error("No accounts registered!");
}