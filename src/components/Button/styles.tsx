import styled from 'styled-components';

export const SubmitButton = styled.button.attrs(() => ({
    type: 'submit'
}))`
    background-color: blue;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: -0.025em;
    line-height: 1.5rem;
    transition: all 0.2s ease 0s;
    padding: 0.625em 1.5em;
    width: 160px;
    min-width: 110px;

    &:hover {
        background-color: darkblue;
    }
`;
