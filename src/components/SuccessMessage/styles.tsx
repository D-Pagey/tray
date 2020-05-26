import styled from 'styled-components';
import { colour } from '../../tokens';

export const Wrapper = styled.div`
    border: 1px solid ${colour.black};
    background-color: ${colour.white};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    margin: 2rem 0 0;
    padding: 1rem 0;
`;

export const Text = styled.p`
    color: ${colour.green};
    text-align: center;
    width: 400px;
`;
