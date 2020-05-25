import styled from 'styled-components';
import { colour } from '../../tokens';

// TODO: deduplicate these buttons

const Button = styled.button.attrs(() => ({
    type: 'button'
}))`
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: -0.025em;
    line-height: 1.5rem;
    transition: all 0.2s ease 0s;
    min-width: 110px;
    padding: 0.625rem 1.5rem;
    width: max-content;
`;

export const SubmitButton = styled.button.attrs(() => ({
    type: 'submit'
}))`
    align-self: flex-end;
    background-color: ${colour.green};
    border: none;
    border-radius: 5px;
    color: ${colour.white};
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: -0.025em;
    line-height: 1.5rem;
    transition: all 0.2s ease 0s;
    min-width: 150px;
    padding: 0.625rem 1.5rem;
    width: max-content;

    &:hover {
        background-color: ${colour.darkgreen};
    }
`;

export const DisabledButton = styled(Button)`
    background-color: ${colour.silver};
    cursor: not-allowed;
`;
