import { InferValueTypes } from '../types';
import * as actions from './actions';

export interface AppState {
    app: any;
}

export type AppActionTypes = ReturnType<InferValueTypes<typeof actions>>;
