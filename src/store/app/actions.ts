import { typedAction } from '../types';
import { AppType } from './types';

export const getAppTest = () => typedAction<AppType>(AppType.SET_SESSION);
