// @ts-check

export function repeat(n, x) {
  return Array(n).fill(x);
}

/** @sig join_ :: (String, [a]) -> String */
export function join_(s, xs) {
  return xs.join(s);
}

/** @sig join2a :: String -> [a] -> String */
export function join2a(s) {
  return function join2b(xs) {
    return join_(s, xs);
  }
}
