import { VendorType } from './types';

export const setVendorList = (vendors: Array<any>) => {
    return {
        type: VendorType.SET_LIST,
        payload: vendors,
    };
};
