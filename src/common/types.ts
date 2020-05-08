import { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

/*
 * @TProps component props
 * @UParams match.params
 */
export type FunctionalPage<TProps, UParams = undefined> = FC<RouteComponentProps<UParams> & TProps>;
