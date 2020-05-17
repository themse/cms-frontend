import { Action } from '../types';
import { CategoryType } from './types';

export const categoryListRequest = () => ({
    type: CategoryType.LIST_REQUEST,
});

export const categoryListSuccess = (categories: Array<any>) => {
    return {
        type: CategoryType.LIST_SUCCESS,
        payload: categories,
    };
};

export const categoryListFailed = (error: any) => {
    // TODO
    return {
        type: CategoryType.LIST_FAILED,
        payload: error,
    };
};
