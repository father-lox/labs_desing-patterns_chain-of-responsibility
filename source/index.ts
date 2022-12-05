import Bitcoin from './wallets/Bitcoin.js';
import Ethereum from './wallets/Ethereum.js';
import Monero from './wallets/Monero.js';
import Wallet from './wallets/Wallet.js';

const btc: HTMLElement = document.getElementById('btc') as HTMLElement;
const eth: HTMLElement = document.getElementById('eth') as HTMLElement;
const xmr: HTMLElement = document.getElementById('xmr') as HTMLElement;

const bitcoinWallet: Wallet = new Bitcoin(200, btc);
const ethereumWallet: Ethereum = new Ethereum(500, eth);
const moneroWallet: Monero = new Monero(700, xmr);

bitcoinWallet.setNext(ethereumWallet);
ethereumWallet.setNext(moneroWallet);

document.getElementById('pay-form')?.addEventListener('submit', (event) => {
    event.preventDefault();

    [btc, eth, xmr].forEach(currency => {
        currency.classList.remove('wallet_success-pay', 'wallet_error-pay');
        
    })

    const amount: number = Number((document.getElementById('pay-button') as HTMLButtonElement).value);
    bitcoinWallet.pay(amount);
});
