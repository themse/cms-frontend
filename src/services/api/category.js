import axios from '../../common/axios';

export const getCategoryList = async () => {
    const { data } = await axios.get('/categories');
    return data;
};
