import Wallet from "./Wallet.js";

export default class Bitcoin extends Wallet {
	constructor(balance: number, node: HTMLElement) {
		super('BitCoin', balance, node);
  }
};