export type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];
// USAGE: type MyPropType = PropType<CategoryActionTypes, 'type'>;

type DistributiveOmit<T, K extends keyof T> = T extends unknown ? Omit<T, K> : never;

type DistributivePick<T, K extends keyof T> = T extends unknown ? Pick<T, K> : never;

// https://www.typescriptlang.org/docs/handbook/utility-types.html
