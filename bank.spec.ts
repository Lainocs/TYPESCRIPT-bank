import { Bank } from './bank'

describe('Withdraw', () => {
    it.each([
        [10, 20, 10],
        [20, 20, 0],
    ])('should withdraw %i from %i and return %i', (amount, balance, expected) => {
        expect(new Bank(balance).withdraw(amount)).toEqual(expected)
    })

    it.each([
        [30, 20],
        [40, 20],
        [50, 20],
    ])('should throw an error when withdrawing %i from %i', (amount, balance) => {
        expect(() => new Bank(balance).withdraw(amount)).toThrowError('Insufficient funds')
    })
})

