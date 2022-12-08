import { Bank } from './bank'

describe('Get Balance', () => {
    it.each([
        [10, 10],
        [20, 20],
    ])('should return %i when balance is %i', (expected, balance) => {
        expect(new Bank(balance).getBalance()).toEqual(expected)
    })
})