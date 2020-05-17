import { InferValueTypes } from '../types';
import * as actions from './actions';

export interface VendorState {
    list: Array<any>;
}

export enum VendorType {
    LIST_REQUEST = '@@vendor/LIST_REQUEST',
    LIST_SUCCESS = '@@vendor/LIST_SUCCESS',
    LIST_FAILED = '@@vendor/LIST_FAILED',
}

export type VendorActionTypes = ReturnType<InferValueTypes<typeof actions>>;
