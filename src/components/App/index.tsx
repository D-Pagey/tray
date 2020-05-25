import React from 'react';
import { Stepper } from '../Stepper';
import * as S from './styles';

export const App = () => {
    return (
        <S.Wrapper>
            <S.GlobalStyle />

            <header>
                <S.Title>Tray.io</S.Title>
            </header>

            <Stepper />
        </S.Wrapper>
    );
};
