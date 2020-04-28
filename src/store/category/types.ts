import * as actions from './actions';
import { InferValueTypes } from '../types';

export interface CategoryState {
    list: Array<any>;
}

export enum CategoryType {
    SET_LIST = '@@category/SET_LIST',
}

export type CategoryActionTypes = ReturnType<InferValueTypes<typeof actions>>;
