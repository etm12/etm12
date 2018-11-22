// @ts-check
export const I = x => x;

export const A = f => x => f(x);

export const T = x => f => f(x);

export const B = (f, g) => x => f(g(x));

export const C = f => (y, x) => f(x, y);

export const K = x => y => x;
