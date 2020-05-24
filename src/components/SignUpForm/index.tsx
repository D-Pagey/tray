import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
                    <Form>
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component="div" />

                        <Field type="text" name="role" />
                        <ErrorMessage name="role" component="div" />

                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />

                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </S.Wrapper>
    );
};
