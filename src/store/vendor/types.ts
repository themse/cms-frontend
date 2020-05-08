import { InferValueTypes } from '../types';
import * as actions from './actions';

export interface VendorState {
    list: Array<any>;
}

export enum VendorType {
    FETCH_LIST = '@@vendor/FETCH_LIST',
    UPDATE_LIST = '@@vendor/UPDATE_LIST',
}

export type VendorActionTypes = ReturnType<InferValueTypes<typeof actions>>;
