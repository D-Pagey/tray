import styled from 'styled-components';

export const ButtonWrapper = styled.div`
    display: flex;
`;

export const NavButton = styled.button.attrs({
    type: 'button'
})<{ isActive?: boolean }>`
    background-color: ${({ isActive }) => (isActive ? '#a8a8ff' : 'white')};
    border: 1px solid black;
    cursor: pointer;
    flex-grow: 1;
    padding: 1rem;
`;
