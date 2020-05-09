import { RootState } from '../types';

const categoryListEntity = (state: RootState) => state.category.list;

export const categoryListSelector = (state: RootState) => {
    return categoryListEntity(state).filter((category) => !category.parentUid);
};
