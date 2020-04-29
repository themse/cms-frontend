import { Action } from '../types';
import { CategoryType } from './types';

export const setCategoryList = (categories: Array<any>) => {
    return {
        type: CategoryType.SET_LIST,
        payload: categories,
    };
};
