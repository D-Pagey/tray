import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Wrapper = styled.div`
    padding: 1rem;
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
`;

export const StyledField = styled(Field)`
    font-size: 1rem;
    padding: 1rem;
    margin: 1rem 0 0;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`;

export const SubmitButton = styled.button`
    background-color: green;
    margin: 1rem 0 0;
    padding: 1rem;
    width: 200px;
    align-self: flex-end;
`;
