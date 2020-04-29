export type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];
// USAGE: type MyPropType = PropType<CategoryActionTypes, 'type'>;
