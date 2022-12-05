import Wallet from "./Wallet.js";

export default class Ethereum extends Wallet {
	constructor(balance: number, node: HTMLElement) {
		super('Ethereum', balance, node);
  }
};
