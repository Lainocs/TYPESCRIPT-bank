import { addMoney } from '../feats/add';

describe('Add Money', () => {
    it.each([
        [10, 30, 40]
    ])('should add money', (amount, balance, expected) => {
        expect(addMoney(amount, balance)).toBe(expected)
    })
})