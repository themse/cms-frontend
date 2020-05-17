import { VendorType } from './types';

export const vendorListRequest = () => ({
    type: VendorType.LIST_REQUEST,
});

export const vendorListSuccess = (vendors: Array<any>) => {
    return {
        type: VendorType.LIST_SUCCESS,
        payload: vendors,
    };
};

export const vendorListFailed = (error: any) => {
    return {
        type: VendorType.LIST_FAILED,
        payload: error,
    };
};
