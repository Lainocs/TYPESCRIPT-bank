export const addMoney = (amount: number, balance: number) => {
    if(amount > 0) {
        return balance += amount
    } else {
        throw new Error("Can't add a negative amount");
    }
}

export const openAccount = (account: string) => {
    return account
}