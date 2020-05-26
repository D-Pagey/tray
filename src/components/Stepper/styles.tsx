import styled from 'styled-components';
import { colour } from '../../tokens';

export const Title = styled.h2`
    margin: 0;
    padding: 2rem 0;
`;

export const ButtonWrapper = styled.div`
    display: flex;
`;

export const NavButton = styled.button.attrs({
    type: 'button'
})<{ isActive?: boolean }>`
    background-color: ${({ isActive }) => (isActive ? colour.purple : colour.white)};
    border: 1px solid ${colour.black};
    flex-grow: 1;
    padding: 1rem;
`;
