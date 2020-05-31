import * as actions from './actions';
import { InferValueTypes } from '../types';

export interface CategoryState {
    list: Array<any>;
}

export enum CategoryType {
    LIST_REQUEST = '@@category/LIST_REQUEST',
    LIST_SUCCESS = '@@category/LIST_SUCCESS',
    LIST_FAILED = '@@category/LIST_FAILED',
}

export type CategoryActionTypes = ReturnType<InferValueTypes<typeof actions>>;
