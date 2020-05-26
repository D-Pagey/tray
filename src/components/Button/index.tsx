import React, { FC, MouseEvent, ReactNode } from 'react';
import * as S from './styles';

export type ButtonTypes = {
    children: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
};

export const Button: FC<ButtonTypes> = ({ children, disabled, onClick, ...props }) => {
    return (
        <S.SubmitButton onClick={onClick} disabled={disabled} {...props}>
            {children}
        </S.SubmitButton>
    );
};
