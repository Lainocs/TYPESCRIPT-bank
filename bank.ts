export class Bank {
	constructor(private balance: number) {}

	account: string = 'Account Opened';

	getBalance() {
        return this.balance
    }
}
