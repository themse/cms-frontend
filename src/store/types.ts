import { AppState } from './app/types';

export interface RootState {
    app: AppState;
    vendor: any;
    category: any;
}

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
