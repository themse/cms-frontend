import * as actions from './actions';
import { InferValueTypes } from '../types';

export interface CategoryState {
    list: Array<any>;
}

export enum CategoryType {
    FETCH_LIST = '@@category/FETCH_LIST',
    UPDATE_LIST = '@@category/UPDATE_LIST',
}

export type CategoryActionTypes = ReturnType<InferValueTypes<typeof actions>>;
