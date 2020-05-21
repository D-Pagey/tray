import React from 'react';
import { Stepper } from '../Stepper';
import * as S from './styles';

export const App = () => {
    return (
        <div>
            <S.GlobalStyle />

            <header>
                <h1>Tray.io</h1>

                <Stepper />
            </header>
        </div>
    );
};
