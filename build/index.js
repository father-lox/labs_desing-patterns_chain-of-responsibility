var _a;
import Bitcoin from './wallets/Bitcoin.js';
import Ethereum from './wallets/Ethereum.js';
import Monero from './wallets/Monero.js';
const btc = document.getElementById('btc');
const eth = document.getElementById('eth');
const xmr = document.getElementById('xmr');
const bitcoinWallet = new Bitcoin(200, btc);
const ethereumWallet = new Ethereum(500, eth);
const moneroWallet = new Monero(700, xmr);
bitcoinWallet.setNext(ethereumWallet);
ethereumWallet.setNext(moneroWallet);
(_a = document.getElementById('pay-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (event) => {
    event.preventDefault();
    [btc, eth, xmr].forEach(currency => {
        currency.classList.remove('wallet_success-pay', 'wallet_error-pay');
    });
    const amount = Number(document.getElementById('pay-button').value);
    bitcoinWallet.pay(amount);
});
//# sourceMappingURL=index.js.map