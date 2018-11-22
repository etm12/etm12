/** @sig I :: a -> a */
export function I<T> (x: T): T;

/** @sig K :: a -> b -> a */
export function K<T, U> (x: T): (y: U) => T;

/** @sig A :: (a -> b) -> a -> b */
export function A<T, R> (f: (x: T) => R): (x: T) => R;

/** @sig T :: a -> (a -> b) -> b */
export function T<T, R> (x: T): (f: (x: T) => R) => R;

/** @sig C :: (a -> b -> c) -> b -> a -> c */
export function C<T, U, R> (f: (x: T, y: U) => R): (y: U, x: T) => R;
