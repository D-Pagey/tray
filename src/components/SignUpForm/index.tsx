import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as S from './styles';

type ErrorTypes = {
    email?: string;
    name?: string;
    password?: string;
};

const initialValues = { email: '', name: '', password: '', role: '' };

export const SignUpForm = () => {
    return (
        <S.Wrapper>
            <Formik
                initialValues={initialValues}
                validate={(values) => {
                    const errors: ErrorTypes = {};

                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <S.StyledForm>
                        <S.Label>
                            Name:
                            <S.StyledField type="text" name="name" />
                        </S.Label>
                        <ErrorMessage name="name" component="div" />

                        <S.Label>
                            Role:
                            <S.StyledField type="text" name="role" />
                        </S.Label>
                        <ErrorMessage name="role" component="div" />

                        <S.Label>
                            Email:
                            <S.StyledField type="email" name="email" />
                        </S.Label>
                        <ErrorMessage name="email" component="div" />

                        <S.Label>
                            Password:
                            <S.StyledField type="password" name="password" />
                        </S.Label>
                        <ErrorMessage name="password" component="div" />

                        <S.SubmitButton type="submit" disabled={isSubmitting}>
                            Submit
                        </S.SubmitButton>
                    </S.StyledForm>
                )}
            </Formik>
        </S.Wrapper>
    );
};
