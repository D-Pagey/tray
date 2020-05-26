import React, { FC } from 'react';
import { Formik } from 'formik';
import { string, object } from 'yup';
import { UserDataTypes } from '../../types';
import { Button } from '../Button';
import * as S from './styles';

const SignupSchema = object().shape({
    name: string().required('Required'),
    email: string().email('Invalid email').required('Required'),
    password: string()
        .min(9, 'Password too short!')
        .required('Required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
            'Must contain a number, an uppercase letter and a lowercase letter'
        )
});

export type SignUpFormTypes = {
    onSubmit: (userData: UserDataTypes) => void;
};

const initialValues = { email: '', name: '', password: '', role: '' };

export const SignUpForm: FC<SignUpFormTypes> = ({ onSubmit }) => {
    return (
        <S.Wrapper>
            <S.Text>
                <S.RedSpan>*</S.RedSpan> indicates a required field
            </S.Text>

            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting }) => {
                    onSubmit(values);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <S.StyledForm>
                        <S.Label htmlFor="name">
                            Name: <S.RedSpan>*</S.RedSpan>
                        </S.Label>
                        <S.StyledField
                            id="name"
                            type="text"
                            name="name"
                            data-testid="signUpNameInput"
                            placeholder="Joe Bloggs"
                        />
                        <S.Error name="name" component="div" data-testid="signUpNameError" />

                        <S.Label htmlFor="role">Role:</S.Label>
                        <S.StyledField
                            id="role"
                            type="text"
                            name="role"
                            data-testid="signUpRoleInput"
                            placeholder="Software Engineer"
                        />

                        <S.Label htmlFor="email">
                            Email: <S.RedSpan>*</S.RedSpan>
                        </S.Label>
                        <S.StyledField
                            id="email"
                            type="email"
                            name="email"
                            data-testid="signUpEmailInput"
                            placeholder="hello@email.com"
                        />
                        <S.Error name="email" component="div" data-testid="signUpEmailError" />

                        <S.Label htmlFor="password">
                            Password: <S.RedSpan>*</S.RedSpan>
                        </S.Label>
                        <S.StyledField
                            id="password"
                            type="password"
                            name="password"
                            data-testid="signUpPasswordInput"
                            placeholder="Secret password..."
                        />
                        <S.Error name="password" component="div" data-testid="signUpPasswordError" />

                        <Button disabled={isSubmitting} data-testid="signUpSubmitButton">
                            Submit
                        </Button>
                    </S.StyledForm>
                )}
            </Formik>
        </S.Wrapper>
    );
};
