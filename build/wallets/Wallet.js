export default class Wallet {
    constructor(name, balance, node) {
        this.name = name;
        this.balance = balance;
        this.node = node;
        this.incomer = null;
        this.updateBalance(node);
    }
    pay(amount) {
        if (this.canPay(amount)) {
            console.log(`Paid ${amount} using ${this.name}`);
            this.node.classList.add('wallet_success-pay');
            this.balance -= amount;
            this.updateBalance(this.node);
        }
        else if (this.incomer) {
            console.log(`Cannot pay using ${this.name}`);
            this.node.classList.add('wallet_error-pay');
            this.incomer.pay(amount);
        }
        else {
            console.log('Unfortunately, not enough money');
            this.node.classList.add('wallet_error-pay');
        }
    }
    updateBalance(node) {
        const balanceNode = node.querySelector('.wallet__balance');
        balanceNode.innerText = this.balance.toString().concat('$');
    }
    canPay(amount) {
        return this.balance >= amount;
    }
    setNext(wallet) {
        this.incomer = wallet;
    }
}
;
//# sourceMappingURL=Wallet.js.map