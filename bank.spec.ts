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
      expect(() => new Bank(balance).deposit(amount)).toThrowError("Can't add a negative amount")
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
