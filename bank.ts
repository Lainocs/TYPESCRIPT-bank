const currencies = [
	{ value: 1, symbol: '€' },
	{ value: 1.05, symbol: '$' },
	{ value: 0.86, symbol: '£' },
]

export class Bank {
	constructor(private balance: number) {}

	currencyConverter(amount: number, currencyOut: string) {
		if (currencyOut === currencies[0].symbol) {
			return amount
		} else {
			const currency = currencies.find(
				(currency) => currency.symbol === currencyOut
			)
			if (!currency) {
				throw new Error('Currency not found')
			}
			return amount * currency.value
		}
	}

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

	transfer(amount: number, to: Bank) {
		this.withdraw(amount)
		to.deposit(amount)
	}
}
