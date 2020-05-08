import React from 'react';
import { FunctionalPage } from '../common/types';

type ErrorProps = {
    code?: number;
};

export const ErrorPage: FunctionalPage<ErrorProps> = ({ code }) => {
    return <p className="text-center">Error {code}</p>;
};
