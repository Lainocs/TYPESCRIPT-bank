import { addMoney, openAccount } from '../feats/add';

describe('Add Money', () => {
    it.each([
        [10, 30, 40]
    ])('should add money', (amount, balance, expected) => {
        expect(addMoney(amount, balance)).toBe(expected)
    })
})

describe('Open account', () => {
    it('Account is being opened', () => {
        expect(openAccount('Compte ouvert')).toBe('Compte ouvert')
    })
})