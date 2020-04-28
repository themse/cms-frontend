import { useEffect } from 'react';

export const useFetching = (
    fetchActionCreator: (args?: any) => Promise<any>,
    ...args: Array<any>
) => {
    useEffect(() => {
        fetchActionCreator(...args);
    }, []);
};
