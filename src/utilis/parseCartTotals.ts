import { CartType } from '../types/types';

export function parseCartTotals(cart: CartType[]) {
  const cartTotals: { id: number; items: CartType[]; amount: number; total: number }[] = [];

  cart.forEach((item) => {
    const index = cartTotals.findIndex((total) => total.id === item.id);

    if (index === -1) {
      cartTotals.push({ id: item.id, items: [item], amount: 1, total: item.price });
    } else {
      cartTotals[index].items?.push(item);
      ++cartTotals[index].amount;
      cartTotals[index].total = cartTotals[index].items.length * item.price;
    }
  });

  return cartTotals;
}

/**
 * array methods:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * */
