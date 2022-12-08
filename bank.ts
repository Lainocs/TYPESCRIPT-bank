export class Bank {
	constructor(private balance: number) {}

	withdraw(amount: number) {
		if (amount > this.balance) {
			throw new Error('Insufficient funds')
		}
		return (this.balance -= amount)
	}

	account: string = 'Account Opened';

	getBalance() {
        return this.balance
    }
}
