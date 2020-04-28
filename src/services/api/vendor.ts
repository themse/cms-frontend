import axios from '../../common/axios';

export const getVendorList = async (): Promise<any> => {
    const { data } = await axios.get('/vendors');
    return data;
};
