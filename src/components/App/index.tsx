import React from 'react';
import { Stepper } from '../Stepper';
import * as S from './styles';

export const App = () => {
    return (
        <S.Wrapper>
            <S.GlobalStyle />

            <S.Title>Tray.io</S.Title>

            <Stepper />
        </S.Wrapper>
    );
};
