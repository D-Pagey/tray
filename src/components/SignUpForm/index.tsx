import React, { FC } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { UserDataTypes } from '../../types';
import { Button } from '../Button';
import * as S from './styles';

export type SignUpFormTypes = {
    onSubmit: (userData: UserDataTypes) => void;
};

type ErrorTypes = {
    email?: string;
    name?: string;
    password?: string;
};

const initialValues = { email: '', name: '', password: '', role: '' };

export const SignUpForm: FC<SignUpFormTypes> = ({ onSubmit }) => {
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
                    onSubmit(values);

                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <S.StyledForm>
                        <S.Label htmlFor="name">
                            Name:
                            <S.StyledField id="name" type="text" name="name" data-testid="signUpNameInput" />
                        </S.Label>
                        <ErrorMessage name="name" component="div" />

                        <S.Label htmlFor="role">
                            Role:
                            <S.StyledField id="role" type="text" name="role" data-testid="signUpRoleInput" />
                        </S.Label>
                        <ErrorMessage name="role" component="div" />

                        <S.Label htmlFor="email">
                            Email:
                            <S.StyledField id="email" type="email" name="email" data-testid="signUpEmailInput" />
                        </S.Label>
                        <ErrorMessage name="email" component="div" />

                        <S.Label htmlFor="password">
                            Password:
                            <S.StyledField
                                id="password"
                                type="password"
                                name="password"
                                data-testid="signUpPasswordInput"
                            />
                        </S.Label>
                        <ErrorMessage name="password" component="div" />

                        <Button disabled={isSubmitting} data-testid="signUpSubmitButton">
                            Submit
                        </Button>
                    </S.StyledForm>
                )}
            </Formik>
        </S.Wrapper>
    );
};
