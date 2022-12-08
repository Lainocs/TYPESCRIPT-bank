export class Bank {
	constructor(private balance: number) {}

	account: string = 'Account Opened';

	deposit(amount: number) {
        if (amount > 0) {
            return (this.balance += amount)
        } else {
            throw new Error("Can't add a negative amount")
        }
  }
	
  withdraw(amount: number) {
		if (amount > this.balance) {
			throw new Error('Insufficient funds')
		}
		return (this.balance -= amount)
	}

	getBalance() {
      return this.balance
  }
}
