import { InferValueTypes } from '../types';
import * as actions from './actions';

export interface AppState {
    app: any;
}

export enum AppType {
    SET_SESSION = '@@app/SET_SESSION',
}

export type AppActionTypes = ReturnType<InferValueTypes<typeof actions>>;
