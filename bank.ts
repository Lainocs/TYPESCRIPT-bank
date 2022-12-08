export class Bank {
	constructor(private balance: number) {}

	deposit(amount: number) {
        if (amount > 0) {
            return (this.balance += amount)
        } else {
            throw new Error("Can't add a negative amount")
        }
    }
}
