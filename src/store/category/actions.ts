import { Action } from '../types';
import { CategoryType } from './types';

export const fetchCategoryList = () => ({
    type: CategoryType.FETCH_LIST,
});

export const updateCategoryList = (categories: Array<any>) => {
    return {
        type: CategoryType.UPDATE_LIST,
        payload: categories,
    };
};
