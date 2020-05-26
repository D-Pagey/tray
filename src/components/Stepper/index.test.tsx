import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Stepper } from '.';

describe('Stepper component', () => {
    it('should render', () => {
        const { container } = render(<Stepper />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render PrivacyChecks page once signed up', async () => {
        const { getByTestId } = render(<Stepper />);

        userEvent.type(getByTestId('signUpNameInput'), 'Dan');
        userEvent.type(getByTestId('signUpEmailInput'), 'dan@mail.com');
        userEvent.type(getByTestId('signUpPasswordInput'), 'Tray10SecurePassword');

        userEvent.click(getByTestId('signUpSubmitButton'));

        await waitFor(() => getByTestId('privacyChecks'));
    });

    it('should render SuccessMessage once sign up and clicked through privacy', async () => {
        const { getByTestId } = render(<Stepper />);

        userEvent.type(getByTestId('signUpNameInput'), 'Dan');
        userEvent.type(getByTestId('signUpEmailInput'), 'dan@mail.com');
        userEvent.type(getByTestId('signUpPasswordInput'), 'Tray10SecurePassword');

        userEvent.click(getByTestId('signUpSubmitButton'));

        await waitFor(() => userEvent.click(getByTestId('privacySubmit')));

        await waitFor(() => getByTestId('successMessage'));
    });
});
