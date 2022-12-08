import { Bank } from './bank'

describe('Currency Converter', () => {
	it.each([
		[10, '€', 10],
		[10, '$', 10.5],
		[10, '£', 8.6],
	])(
		'should convert %i %s to %s and return %i',
		(amount, currencyOut, expected) => {
			expect(new Bank(0).currencyConverter(amount, currencyOut)).toEqual(
				expected
			)
		}
	)

	it.each([
		[10, '¥'],
		[20, 'kr'],
	])('should throw an error when converting %i %s', (amount, currencyOut) => {
		expect(() =>
			new Bank(0).currencyConverter(amount, currencyOut)
		).toThrowError('Currency not found')
	})
})

describe('Withdraw', () => {
	it.each([
		[10, 20, 10],
		[20, 20, 0],
	])(
		'should withdraw %i from %i and return %i',
		(amount, balance, expected) => {
			expect(new Bank(balance).withdraw(amount)).toEqual(expected)
		}
	)

	it.each([
		[30, 20],
		[40, 20],
		[50, 20],
	])('should throw an error when withdrawing %i from %i', (amount, balance) => {
		expect(() => new Bank(balance).withdraw(amount)).toThrowError(
			'Insufficient funds'
		)
	})
})

describe('Deposit', () => {
	it.each([
		[10, 20, 30],
		[20, 20, 40],
	])('should deposit %i into %i and return %i', (amount, balance, expected) => {
		expect(new Bank(balance).deposit(amount)).toEqual(expected)
	})

	it.each([
		[-10, 20],
		[-20, 20],
		[-30, 20],
	])('should throw an error when depositing %i into %i', (amount, balance) => {
		expect(() => new Bank(balance).deposit(amount)).toThrowError(
			"Can't add a negative amount"
		)
	})
})

describe('Get Balance', () => {
	it.each([
		[10, 10],
		[20, 20],
	])('should return %i when balance is %i', (expected, balance) => {
		expect(new Bank(balance).getBalance()).toEqual(expected)
	})
})

describe('Transfer', () => {
	it.each([
		[10, 20, 10, 10, 20],
		[20, 20, 20, 0, 40],
	])(
		'should transfer %i from %i to %i and return %i',
		(amount, fromBalance, toBalance, fromExpected, toExpected) => {
			const from = new Bank(fromBalance)
			const to = new Bank(toBalance)
			from.transfer(amount, to)
			expect(from.getBalance()).toEqual(fromExpected)
			expect(to.getBalance()).toEqual(toExpected)
		}
	)

	it.each([
		[30, 20, 10],
		[40, 20, 10],
		[50, 20, 10],
	])(
		'should throw an error when transferring %i from %i to %i',
		(amount, fromBalance, toBalance) => {
			const from = new Bank(fromBalance)
			const to = new Bank(toBalance)
			expect(() => from.transfer(amount, to)).toThrowError('Insufficient funds')
		}
	)
})
