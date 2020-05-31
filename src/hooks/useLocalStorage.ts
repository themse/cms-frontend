import { useState, useEffect } from 'react';

export const useLocalStorage = (key: string, initialState = '') => {
    const [value, setValue] = useState(() => {
        return localStorage.getItem(key) || initialState;
    });

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [value]);

    return [value, setValue];
};

// const [token, setToken] = useLocalStorage('token');
