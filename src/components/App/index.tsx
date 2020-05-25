import React from 'react';
import { Stepper } from '../Stepper';
import * as S from './styles';

export const App = () => {
    return (
        <div>
            <S.GlobalStyle />

            <header>
                <S.Title>Tray.io</S.Title>
            </header>

            <Stepper />
        </div>
    );
};
