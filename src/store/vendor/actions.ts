import { typedAction } from '../types';
import { VendorType } from './types';

export const vendorListRequest = () => typedAction<VendorType>(VendorType.LIST_REQUEST);

export const vendorListSuccess = (vendors: Array<any>) =>
    typedAction<VendorType, any[]>(VendorType.LIST_SUCCESS, vendors);

export const vendorListFailed = (error: any) =>
    typedAction<VendorType, any>(VendorType.LIST_FAILED, error);
