import axios from '../../common/axios';

export const getVendorList = async () => {
    const { data } = await axios.get('/vendors');
    return data;
};
