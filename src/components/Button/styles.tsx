import styled from 'styled-components';
import { colour } from '../../tokens';

export const SubmitButton = styled.button.attrs(() => ({
    type: 'submit'
}))`
    align-self: flex-end;
    background-color: ${({ disabled }) => (disabled ? colour.silver : colour.green)};
    border: none;
    border-radius: 5px;
    color: ${colour.white};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: -0.025em;
    line-height: 1.5rem;
    transition: all 0.2s ease 0s;
    min-width: 150px;
    padding: 0.625rem 1.5rem;
    width: max-content;

    &:hover {
        background-color: ${({ disabled }) => !disabled && colour.darkgreen};
    }
`;
