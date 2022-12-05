export default class Wallet {
    private incomer: Wallet | null = null;

    constructor(protected name: string, protected balance: number, private node: HTMLElement) {
		this.updateBalance(node);
	}

	pay(amount: number): void {
		if (this.canPay(amount)) {
			console.log(`Paid ${amount} using ${this.name}`);

			this.node.classList.add('wallet_success-pay');
			this.balance -= amount;
			this.updateBalance(this.node);
		} else if (this.incomer) {
			console.log(`Cannot pay using ${this.name}`);

			this.node.classList.add('wallet_error-pay');
			this.incomer.pay(amount)
		} else {
			console.log('Unfortunately, not enough money');

			this.node.classList.add('wallet_error-pay');
		}
	}

	private updateBalance(node: HTMLElement): void {
		const balanceNode: HTMLParagraphElement = node.querySelector('.wallet__balance') as HTMLParagraphElement;
		balanceNode.innerText = this.balance.toString().concat('$');
	}

	private canPay(amount: number): boolean {
		return this.balance >= amount;
	}

	setNext(wallet: Wallet): void {
		this.incomer = wallet;
	}
};