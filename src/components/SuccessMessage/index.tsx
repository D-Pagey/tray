import React from 'react';
import * as S from './styles';

export const SuccessMessage = () => (
    <S.Wrapper data-testid="successMessage">
        <S.Text>Please verify your email address, you should have received an email from us already!</S.Text>
    </S.Wrapper>
);
