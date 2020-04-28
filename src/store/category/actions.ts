import { CategoryType } from './types';

export const setCategoryList = (categories: any) => {
    return {
        type: CategoryType.SET_LIST,
        payload: categories,
    };
};
