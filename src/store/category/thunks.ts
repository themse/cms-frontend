import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as Api from '../../services/api';
import { setCategoryList } from './actions';
import { RootState } from '../types';

export const setCategoryListRequest = (): ThunkAction<
    void,
    RootState,
    unknown,
    Action<string>
> => async (dispatch) => {
    try {
        const categories = await Api.category.getCategoryList();
        dispatch(setCategoryList(categories));
    } catch (error) {
        console.error(error);
    }
};
