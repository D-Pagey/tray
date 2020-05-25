import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Wrapper = styled.div`
    padding: 1rem;
`;

export const Text = styled.p`
    margin: 0;
    padding: 0 0 1rem;
`;

export const RedSpan = styled.span`
    color: red;
    display: contents;
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
`;

export const StyledField = styled(Field)`
    border: 1px solid silver;
    border-radius: 5px;
    font-size: 1rem;
    margin: 0 0 1rem;
    padding: 1rem;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0 0 1rem;
`;

export const SubmitButton = styled.button`
    background-color: green;
    margin: 1rem 0 0;
    padding: 1rem;
    width: 200px;
    align-self: flex-end;
`;
