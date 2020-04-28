import axios from '../../common/axios';

export const getCategoryList = async (): Promise<any> => {
    const { data } = await axios.get('/categories');
    return data;
};
