import { Action } from '../types';
import { AppType } from './types';

export const getAppTest = (): Action<AppType> => {
    return {
        type: AppType.SET_SESSION,
    };
};
