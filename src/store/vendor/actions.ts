import { VendorType } from './types';

export const fetchVendorList = () => ({
    type: VendorType.FETCH_LIST,
});

export const updateVendorList = (vendors: Array<any>) => {
    return {
        type: VendorType.UPDATE_LIST,
        payload: vendors,
    };
};
