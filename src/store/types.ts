import { Action as ReduxAction } from 'redux';
import { AppState } from './app/types';

export interface RootState {
    app: AppState;
    vendor: any;
    category: any;
}

export interface Action<T extends string, P = undefined> extends ReduxAction {
    type: T;
    payload?: P;
}

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type HandlerType<T, U> = (state: T, action?: any) => T; // TODO incorrect action type / research

export type ReducerStrategyType<T, U, R extends string> = {
    [key in R]: HandlerType<T, U>;
} & { __default__: (state: T) => T };
