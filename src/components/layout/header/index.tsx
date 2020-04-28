import React, { Fragment } from 'react';
import { TopMenu } from './desktop/top-menu';
import { MainMenu } from './desktop/main-menu';

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
    return (
        <Fragment>
            <header>
                <TopMenu />
                <MainMenu />
            </header>
        </Fragment>
    );
};
