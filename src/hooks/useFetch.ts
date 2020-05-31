import { useState, useEffect } from 'react';
import { Method } from 'axios';
import axios from '../common/axios';

type UrlType = {
    pathname: string;
    params: { [key: string]: any };
    method?: Method;
    protocol?: string;
};

export const useFetch = (url: UrlType) => {
    const [isLoading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const [options, setOptions] = useState({});

    const doFetch = (options = {}) => {
        setOptions(options);
        setLoading(true);
    };

    useEffect(() => {
        if (Object.keys(url.params)) {
            setOptions(url.params);
        }
    }, []);

    useEffect(() => {
        let skipGetResponseAfterDestroy = false;
        if (!isLoading) {
            return;
        }
        const data = axios(`${url.protocol ?? 'https'}://${url.pathname}`, {
            method: url.method ?? 'get',
            ...options,
        });

        if (!skipGetResponseAfterDestroy) {
            data.then((response) => {
                setResponse(response.data);
            })
                .catch((error) => {
                    setError(error.response.data);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
        return () => {
            skipGetResponseAfterDestroy = true;
        };
    }),
        [isLoading];

    return [{ response, isLoading, error }, doFetch];
};

// const [data, doFetch] = useFetch(url);

// const {response, isLoading, error} = data;
