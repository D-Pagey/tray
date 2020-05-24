import React from 'react';
import { act, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SignUpForm, SignUpFormTypes } from '.';

const props: SignUpFormTypes = {
    onSubmit: () => null
};

describe('SignUpForm component', () => {
    it('should render', () => {
        const { container } = render(<SignUpForm {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should call onSubmit with correct values', async () => {
        const name = 'Dan';
        const role = 'Software Engineer';
        const email = 'dan@gmail.com';
        const password = 'hello1234';
        const onSubmit = jest.fn();

        const { findByTestId, getByTestId } = render(<SignUpForm {...props} onSubmit={onSubmit} />);

        userEvent.type(await findByTestId('signUpNameInput'), name);

        userEvent.type(await findByTestId('signUpRoleInput'), role);

        userEvent.type(await findByTestId('signUpEmailInput'), email);

        userEvent.type(await findByTestId('signUpPasswordInput'), password);

        userEvent.click(getByTestId('signUpSubmitButton'));

        await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({ name, role, email, password }));
    });

    it.todo('should show errors for each required field (use it.each)');
});
