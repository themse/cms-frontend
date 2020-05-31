import { AppState } from './app/types';
import { VendorState } from './vendor/types';
import { CategoryState } from './category/types';

export interface RootState {
    app: AppState;
    vendor: VendorState;
    category: CategoryState;
}

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type HandlerType<T, U> = (state: T, action?: any) => T; // TODO incorrect action type / research

export type ReducerStrategyType<T, U, R extends string> = {
    [key in R]: HandlerType<T, U>;
} & { __default__: (state: T) => T };

export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P extends any>(
    type: T,
    payload: P
): { type: T; payload: P };
export function typedAction(type: string, payload?: any) {
    return { type, payload };
}
