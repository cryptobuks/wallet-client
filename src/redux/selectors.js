// @flow
import { createSelector, type Selector } from 'reselect';
import { Wallet, type WalletType } from '../wallet/walletState';

const getActiveWalletId = state => state.wallet.activeId;

const getWallets = state => state.wallet.wallets;

const getCurrency = state => state.wallet.currency;

export const getActiveWallet: Selector<*, *, ?Wallet> = createSelector(
  [getWallets, getActiveWalletId],
  (wallets: Array<WalletType>, activeWalletId: ?number): ?Wallet => {
    if (wallets.length) {
      if (activeWalletId) {
        const wallet = wallets.find(w => w.id === activeWalletId);
        if (wallet) {
          return new Wallet(wallet);
        }
      }
      return new Wallet(wallets[0]);
    }
    return null;
  },
);

function getWalletBalances(wallets: Array<WalletType>, currency: string) {
  return wallets.map((wallet: WalletType) =>
    new Wallet(wallet).getRepresentationalBalance(currency),
  );
}

function getBalance(wallets: Array<WalletType>, currency: string): number {
  const walletBalances = getWalletBalances(wallets, currency);
  return Number(
    walletBalances
      .reduce((balance1, balance2) => balance1 + balance2, 0)
      .toFixed(2),
  );
}

export const getTotalBalance: Selector<*, *, number> = createSelector(
  [getWallets, getCurrency],
  (wallets: Array<WalletType>, currency: string): number => {
    if (wallets.length) {
      return getBalance(wallets, currency);
    }
    return -1;
  },
);

export default { getActiveWallet };
