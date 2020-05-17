import { typedAction } from '../types';
import { CategoryType } from './types';

export const categoryListRequest = () => typedAction<CategoryType>(CategoryType.LIST_REQUEST);

export const categoryListSuccess = (categories: Array<any>) =>
    typedAction<CategoryType, any[]>(CategoryType.LIST_SUCCESS, categories);

export const categoryListFailed = (error: any) =>
    typedAction<CategoryType, any>(CategoryType.LIST_FAILED, error);
