import { InferValueTypes } from '../types';
import * as actions from './actions';

export interface VendorState {
    list: Array<any>;
}

export enum VendorType {
    SET_LIST = '@@vendor/SET_LIST',
}

export type VendorActionTypes = ReturnType<InferValueTypes<typeof actions>>;
