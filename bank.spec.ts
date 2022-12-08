import { Bank } from './bank'

describe('Currency Converter', () => {
    it.each([
        [10, '€', 10],
        [10, '$', 10.5],
        [10, '£', 8.6],
    ])('should convert %i %s to %s and return %i', (amount, currencyOut, expected) => {
        expect(new Bank(0).currencyConverter(amount, currencyOut)).toEqual(expected)
    })

    it.each([
        [10, '¥'],
        [20, 'kr'],
    ])('should throw an error when converting %i %s', (amount, currencyOut) => {
        expect(() => new Bank(0).currencyConverter(amount, currencyOut)).toThrowError('Currency not found')
    })
})