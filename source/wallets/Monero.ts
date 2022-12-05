import Wallet from "./Wallet.js";

export default class Monero extends Wallet {
	constructor(balance: number, node: HTMLElement) {
		super('Monero', balance, node);
  }
};