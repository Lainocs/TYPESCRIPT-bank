import { Bank } from './bank'


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
