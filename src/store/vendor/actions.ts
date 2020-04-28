import { VendorType } from './types';

export const setVendorList = (vendors: any) => {
    return {
        type: VendorType.SET_LIST,
        payload: vendors,
    };
};
