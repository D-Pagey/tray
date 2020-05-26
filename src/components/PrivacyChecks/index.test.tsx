import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PrivacyChecks, PrivacyChecksTypes } from '.';

const props: PrivacyChecksTypes = {
    onSubmit: () => null
};

describe('PrivacyChecks component', () => {
    it('should render', () => {
        const { container } = render(<PrivacyChecks {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should call onSubmit with both values when both checked', async () => {
        const onSubmit = jest.fn();
        const { getByTestId } = render(<PrivacyChecks {...props} onSubmit={onSubmit} />);

        userEvent.click(getByTestId('communicationCheckbox'));
        userEvent.click(getByTestId('updatesCheckbox'));
        userEvent.click(getByTestId('privacySubmit'));

        await waitFor(() =>
            expect(onSubmit).toHaveBeenCalledWith({ receiveUpdates: true, receiveCommunication: true })
        );
    });

    it.each`
        receiveUpdates | receiveCommunication
        ${true}        | ${false}
        ${false}       | ${true}
    `(
        'should call onSubmit with correct values when receiveUpdates = $receiveUpdates',
        async ({ receiveUpdates, receiveCommunication }) => {
            const onSubmit = jest.fn();
            const { getByTestId } = render(<PrivacyChecks {...props} onSubmit={onSubmit} />);

            if (receiveUpdates) {
                userEvent.click(getByTestId('updatesCheckbox'));
            } else {
                userEvent.click(getByTestId('communicationCheckbox'));
            }

            userEvent.click(getByTestId('privacySubmit'));

            await waitFor(() =>
                expect(onSubmit).toHaveBeenCalledWith({
                    receiveUpdates,
                    receiveCommunication
                })
            );
        }
    );
});
