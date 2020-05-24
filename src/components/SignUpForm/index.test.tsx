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

        const { getByTestId } = render(<SignUpForm {...props} onSubmit={onSubmit} />);

        userEvent.type(getByTestId('signUpNameInput'), name);

        userEvent.type(getByTestId('signUpRoleInput'), role);

        userEvent.type(getByTestId('signUpEmailInput'), email);

        userEvent.type(getByTestId('signUpPasswordInput'), password);

        userEvent.click(getByTestId('signUpSubmitButton'));

        await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({ name, role, email, password }));
    });

    it.todo('should show errors for each required field (use it.each)');
});
